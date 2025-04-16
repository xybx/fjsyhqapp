<template>
    <div class="country-container">
        <div class="country-left">
            <div
                class="chart-item"
                v-for="(item, index) in leftData"
                :key="index"
                @mouseenter="overChartBox(item, false)"
                @mouseleave="overChartBox(item, true)"
            >
                <div class="chart-head">
                    <i class="chart-icon"></i>
                    <span class="chart-head-txt">{{ item.typeName }}</span>
                </div>
                <div class="chart-main">
                    <div class="main-left-content">
                        <div class="main-content">
                            <Chart
                                :chartID="`leftChartBox${index}`"
                                v-model:chartOption="item.chartOption"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="country-center">
            <div class="center-btns">
                <el-popover
                    placement="bottom"
                    trigger="hover"
                    popper-class="zb-popover"
                >
                    <template #reference>
                        <el-button class="zb-btn">指标</el-button>
                    </template>
                    <ul class="qx-list">
                        <li
                            v-for="item in zbList"
                            :key="item.id"
                            @click="clickZB(item)"
                            :class="item.isFocus ? 'focus-country' : ''"
                        >
                            {{ item.label }}
                        </li>
                    </ul>
                </el-popover>

                <el-button class="disabled-btn" @click="handleZS"
                    >指数</el-button
                >

                <el-popover
                    placement="bottom-start"
                    trigger="hover"
                    popper-class="zb-search-layer"
                >
                    <template #reference>
                        <el-button class="index-query-btn">指标查询</el-button>
                    </template>
                    <ul class="zb-list country-ul">
                        <li
                            v-for="(item, index) in zbFirstData"
                            :key="index"
                            @click="handleZbFirst(item)"
                            :class="
                                item.typeName === currFirstVal
                                    ? 'focusFirst'
                                    : ''
                            "
                        >
                            {{ item.typeName }}
                        </li>
                    </ul>
                    <!-- <ul class="curr-list" v-else>
                        <i
                            class="iconfont icon-guanbi"
                            @click="closeCurrZB"
                        ></i>
                        <li>{{ currSecondVal }}</li>
                    </ul> -->
                </el-popover>
            </div>
            <div class="country-map" id="map"></div>
            <div class="legend" v-show="showLegend">
                <div class="legend-pic"></div>
                <div class="legend-txt">
                    <span>低</span>
                    <span>（指标强度）</span>
                    <span>高</span>
                </div>
            </div>
            <div class="country-page">
                <el-pagination
                    layout="prev, pager, next"
                    :total="zbAllData.length"
                    :page-size="6"
                    :pager-count="5"
                    v-model:current-page="currentPage"
                    @current-change="setCurrPage"
                    small
                />
            </div>
        </div>
        <div class="country-right">
            <div
                class="chart-item"
                v-for="(item, index) in rightData"
                :key="index"
                @mouseenter="overChartBox(item, false)"
                @mouseleave="overChartBox(item, true)"
            >
                <div class="chart-head">
                    <i class="chart-icon"></i>
                    <span class="chart-head-txt">{{ item.typeName }}</span>
                </div>
                <div class="chart-main">
                    <div class="main-right-content">
                        <div class="main-content">
                            <Chart
                                :chartID="`rightChartBox${index}`"
                                v-model:chartOption="item.chartOption"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <el-dialog
        v-model="dialogVisible"
        :title="currItem.typeName"
        width="30%"
        :close-on-click-modal="false"
        align-center
        class="chart-dialog"
    >
        <div class="dialog-main">
            <Chart
                chartID="dialogChart"
                v-model:chartOption="currItem.chartOption"
            />
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onBeforeUnmount, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import Chart from '../../components/chart/Chart.vue';
import { ElMessage } from 'element-plus';
import { getCountryQualApi, getXqDataApi } from './country-api';
import Basemap from '@arcgis/core/Basemap';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import * as identify from '@arcgis/core/rest/identify';
import IdentifyParameters from '@arcgis/core/rest/support/IdentifyParameters';
import * as _ from 'lodash';

const router = useRouter();

// 指标列表
const zbList = [
    { id: 1, label: '市辖区', path: '/city', isFocus: false },
    { id: 2, label: '区县', path: '/country', isFocus: true },
];
// 指标点击
const clickZB = (item: any) => {
    router.push(item.path);
};

// 指数
const handleZS = () => {
    ElMessage.warning('此功能后续开放...');
};

const currFirstVal = ref('');

// 指标总列表
const zbAllData = ref<any>([]);
// 指标查询列表
const zbFirstData = ref<any>([]);
// 获取指标项
const getCountryZbList = async () => {
    const { data: res } = await getCountryQualApi();
    if (res.code === 200) {
        zbFirstData.value = res.data;
        zbAllData.value = res.data;
        console.log(zbAllData.value);

        zbAllData.value.map((item: any, index: number) => {
            Object.assign(item, {
                chartOption: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        },
                        className: 'focusChart',
                        formatter: '{b0}，{c0}',
                    },
                    dataZoom: [
                        {
                            type: 'slider',
                            show: true, //隐藏或显示（true）组件
                            backgroundColor: 'rgb(19, 63, 100)', // 组件的背景颜色。
                            fillerColor: 'rgb(16, 171, 198)', // 选中范围的填充颜色。
                            borderColor: 'rgb(19, 63, 100)', // 边框颜色
                            showDetail: false, //是否显示detail，即拖拽时候显示详细数值信息
                            startValue: 0, // 数据窗口范围的起始数值
                            endValue: 9, // 数据窗口范围的结束数值（一页显示多少条数据）
                            yAxisIndex: [0, 1], //控制哪个轴，如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。此处控制第二根轴
                            filterMode: 'empty',
                            width: 10, //滚动条高度
                            height: '80%', //滚动条显示位置
                            right: 0, // 距离右边
                            handleSize: 0, //控制手柄的尺寸
                            zoomLock: true,
                            top: 'middle',
                            brushSelect: false,
                            rangeMode: ['value', 'value'],
                            dataBackground: {
                                lineStyle: {
                                    opacity: 0,
                                },
                                areaStyle: {
                                    opacity: 0,
                                },
                            },
                        },
                        {
                            //没有下面这块的话，只能拖动滚动条，鼠标滚轮在区域内不能控制外部滚动条
                            type: 'inside',
                            yAxisIndex: [0, 1], //控制哪个轴，如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。此处控制第二根轴
                            zoomOnMouseWheel: false, //滚轮是否触发缩放
                            moveOnMouseMove: true, //鼠标移动能否触发平移
                            moveOnMouseWheel: true, //鼠标滚轮能否触发平移
                        },
                    ],

                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        top: '5%',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'value',
                        max: 100,
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255, 0.2)',
                            },
                            show: true,
                        },
                        axisLabel: {
                            color: 'rgba(255,255,255, 1)',
                        },
                    },
                    yAxis: {
                        type: 'category',
                        data: [],
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255, 0.2)',
                            },
                            show: true,
                        },
                        axisLabel: {
                            color: 'rgba(255,255,255, 1)',
                        },
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [],
                            stack: 'value',
                            itemStyle: {
                                normal: {
                                    color: function (params: any) {
                                        let colorList = [
                                            'rgba(58, 158, 240, 1)',
                                            'rgba(58, 240, 224, 1)',
                                            'rgba(63, 189, 217, 1)',
                                            'rgba(74, 115, 217, 1)',
                                            'rgba(48, 144, 166, 1)',
                                        ];
                                        if (params.name == '福建省') {
                                            return 'rgba(241, 153, 57, 1)';
                                        } else {
                                            return colorList[
                                                params.dataIndex %
                                                    colorList.length
                                            ];
                                        }
                                    },
                                },
                            },
                        },
                    ],
                },
            });
            if (item.layerId === 0) {
                currFirstVal.value = item.typeName;
            }
            // setChartData(item);
        });
        for await (let item of zbAllData.value) {
            setChartData(item);
        }
    } else {
        ElMessage.error(res.msg);
    }
};

// 地图中心分页
const setCurrPage = (val: any) => {
    chartLoop.value = false;
    let focusDom = <any>document.getElementsByClassName('esri-popup')[0];
    if (focusDom) {
        focusDom.style.display = 'none';
    }
};

// 显示选中项
const showCurrZB = ref(false);

const currSecondVal = ref('');

//
const maxChart = ref<any>();
const nameList = ref<any>([]);
const valList = ref<any>([]);
const colorList = ref<any>([]);
const chartList = ref<any>([]);
// 渲染图表
const setChartData = async (item: any) => {
    let data = {
        typeName: item.typeName,
    };

    const { data: chartRes } = await getXqDataApi(data);
    nameList.value = [];
    valList.value = [];
    colorList.value = [];
    chartList.value = chartRes.data;

    chartRes.data.map((subItem: any) => {
        nameList.value.push(subItem.name);
        valList.value.push(subItem.value);
        colorList.value.push(subItem.color);
    });
    maxChart.value = Math.max(...valList.value);

    let maxArr: any = [];
    valList.value.map((item: any) => {
        maxArr.push(maxChart.value - item);
    });

    item.chartOption.xAxis.max = maxChart.value;
    item.chartOption.yAxis.data = nameList.value;

    item.chartOption.series[0].data = valList.value;

    // item.chartOption.series[1].data = maxArr;

    // 滚动条顶部开始10项
    item.chartOption.dataZoom[0].startValue = colorList.value.length;
    item.chartOption.dataZoom[0].endValue = colorList.value.length - 9;
};

// 图表颜色值返回
const setColor = (params: any) => {
    let returnColor = '';
    chartList.value.map((item: any) => {
        if (item.name.includes(params.name)) {
            returnColor = item.color;
        }
    });
    return returnColor;
};

const loopChart = () => {
    timer = window.setInterval(() => {
        if (chartLoop.value) {
            console.log(currentPage.value, 'currentPage.value');
            currentPage.value++;

            let pages = Math.ceil(zbAllData.value.length / 6);
            if (currentPage.value > pages) {
                currentPage.value = 1;
            }
        }
    }, 8000);
};

const chartLoop = ref(true);
const overChartBox = (item: any, boo: boolean) => {
    chartLoop.value = boo;
};

onBeforeUnmount(() => {
    console.log('退出页面');
    window.clearInterval(timer);
});

// 当前分页
const currentPage = <any>ref(1);

let timer = <any>null;

// 左三项
const leftData = computed({
    get() {
        return zbAllData.value
            .slice((currentPage.value - 1) * 6, currentPage.value * 6)
            .slice(0, 3);
    },
    set() {},
});
// 右三项
const rightData = computed({
    get() {
        return zbAllData.value
            .slice((currentPage.value - 1) * 6, currentPage.value * 6)
            .slice(3, 6);
    },
    set() {},
});

const currItem = ref<any>({
    chartOption: {},
    typeName: '',
});

// 指标项点击
const handleZbFirst = (item: any) => {
    let focusDom = <any>document.getElementsByClassName('esri-popup')[0];
    if (focusDom) {
        focusDom.style.display = 'none';
    }
    mapView.graphics.removeAll();
    console.log(item, 'zbItem');
    currFirstVal.value = item.typeName;
    currSecondVal.value = item.typeName;
    chartLoop.value = false;
    showCurrZB.value = true;
    if (item.layerId !== '') {
        let groupLayer = mapView.map.findLayerById('grouplayer');
        let isLayer = groupLayer.findLayerById(`countrylayer${item.layerId}`);
        if (isLayer) return (isLayer.visible = true);

        const foundLayer: any = groupLayer.allLayers.find((layer: any) => {
            return layer.visible;
        });
        console.log(foundLayer);

        // 使用图层组特性
        groupLayer.add(
            new MapImageLayer({
                id: `countrylayer${item.layerId}`,
                url: window.countryServer,
                imageFormat: 'png8',
                sublayers: [{ id: item.layerId }],
                effect: 'drop-shadow(10px 10px 20px #00a5f6)',
            })
        );
        showLegend.value = true;
    } else {
        ElMessage.warning('当前指标项暂无地图数据');
    }
    dialogVisible.value = true;
    nextTick(() => {
        Object.assign(currItem.value, item);
    });
};

const closeCurrZB = () => {
    let focusDom = <any>document.getElementsByClassName('esri-popup')[0];
    if (focusDom) {
        focusDom.style.display = 'none';
    }
    showCurrZB.value = false;
    chartLoop.value = true;
    let groupLayer = mapView.map.findLayerById('grouplayer');
    let defaultLayer = groupLayer.findLayerById(`countrylayer0`);
    if (defaultLayer) return (defaultLayer.visible = true);
};

// 初始化地图
let mapView = <any>null;
const initMap = () => {
    let featureLayer = new FeatureLayer({
        id: 'countrylayer0',
        url: window.countryServer,
        outFields: ['*'],
        layerId: 0,
        visible: true,
        opacity: 0,
    });

    let imageLayer = new MapImageLayer({
        id: 'countrylayer0',
        url: window.countryServer,
        imageFormat: 'png8',
        sublayers: [{ id: 0 }],
        effect: 'drop-shadow(10px 10px 20px #00a5f6)',
    });

    let groupLayer = new GroupLayer({
        id: 'grouplayer',
        visibilityMode: 'exclusive',
    });
    groupLayer.add(imageLayer);
    console.log(groupLayer, 'groupLayer');

    let basemap = new Basemap({
        baseLayers: [groupLayer],
    });

    let map = new Map({
        basemap,
    });

    mapView = new MapView({
        container: 'map',
        map,
        zoom: 4,
        constraints: {
            rotationEnabled: false,
        },
        highlightOptions: {
            haloOpacity: 0,
        },
    });
    mapView.ui.components = [];
    mapView.map.add(featureLayer);

    featureLayer.labelingInfo = [
        {
            symbol: {
                type: 'text',
                color: [0, 0, 0, 0],
            },
        },
    ] as any;

    let highlight: any = null;
    mapView.when(() => {
        // 禁止拖动和缩放
        mapView.on(
            ['double-click', 'drag', 'mouse-wheel'] as any,
            (evt: any) => {
                evt.stopPropagation();
            }
        );

        // 高亮地块
        mapView.on(
            'pointer-move',
            _.debounce(async (evt: any) => {
                let mapPoint = mapView.toMap({ x: evt.x, y: evt.y });
                const opts = {
                    include: featureLayer,
                };
                const foundLayer: any = groupLayer.allLayers.find((layer) => {
                    return layer.visible;
                });

                mapView.hitTest(evt, opts).then(async (response: any) => {
                    if (response.results.length) {
                        const graphic = response.results[0].graphic;
                        if (highlight) {
                            highlight.remove();
                        }
                        console.log(response.results, 'response.results');

                        console.log(graphic, 'graphic');
                        graphic.symbol = {
                            type: 'simple-fill',
                            color: [0, 255, 255, 0.25],
                            outline: {
                                width: 0,
                            },
                        };
                        mapView.graphics.removeAll();
                        mapView.graphics.add(graphic);
                    }
                });
                if (foundLayer.sublayers.items[0].id === 0) return false;

                let identPams = new IdentifyParameters({
                    geometry: mapPoint,
                    returnGeometry: false,
                    layerIds: foundLayer.sublayers.items[0].id,
                    width: mapView.width,
                    height: mapView.height,
                    tolerance: 10,
                    mapExtent: mapView.extent,
                    returnFieldName: false,
                });
                const identRes = await identify.identify(
                    foundLayer.url,
                    identPams
                );
                console.log(identRes, 'identRes');
                if (identRes.results.length > 0) {
                    let feature = identRes.results[0].feature;

                    let shengItem: any = { name: '福建省', value: 0 };
                    let data = {
                        typeName: feature.attributes['指标名称'],
                    };
                    const { data: chartRes } = await getXqDataApi(data);
                    chartRes.data.map((chartItem: any) => {
                        if (chartItem.name == '福建省') {
                            Object.assign(shengItem, chartItem);
                        }
                    });
                    let focusDom = <any>(
                        document.getElementsByClassName('esri-popup')[0]
                    );
                    if (focusDom) {
                        focusDom.style.display = 'flex';
                    }

                    mapView.popup.open({
                        location: mapPoint,
                        title: `<span class="layerpopup-title">${feature.attributes['行政区名称']}</span>`,
                        content: `
                            <div class="layer-txt">
                                ${feature.attributes['指标名称']}：
                                <span class="layer-count">${
                                    Number(feature.attributes['指标值']) == 0
                                        ? '---'
                                        : Number(feature.attributes['指标值'])
                                }</span>
                            </div>
                            <div class="layer-txt">
                                ${shengItem.name}：
                                <span class="layer-count">${
                                    Number(shengItem.value) == 0
                                        ? '---'
                                        : Number(shengItem.value)
                                }</span>
                            </div>`,
                    });
                }
            }, 500)
        );
    });
};

// 图例显示
const showLegend = ref<boolean>(false);

onMounted(async () => {
    initMap();
    await getCountryZbList();
    loopChart();
});

const dialogVisible = ref(false);
</script>

<style scoped lang="scss">
@import './county.scss';
</style>
