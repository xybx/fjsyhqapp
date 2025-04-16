<template>
    <div class="city-container">
        <div class="city-left">
            <div
                class="chart-item"
                v-for="(item, index) in zbAllData.slice(0, 2)"
                :key="index"
                @mouseenter="overChartBox(item, false)"
                @mouseleave="overChartBox(item, true)"
            >
                <div class="chart-head">
                    <i class="chart-icon"></i>
                    <span class="chart-head-txt">{{ item.typeName }}</span>
                </div>
                <div class="chart-main">
                    <div class="main-title">
                        {{ item.typeNameList[item.currPage - 1].typeName }}
                    </div>
                    <div class="main-left-content">
                        <div class="main-content">
                            <Chart
                                :chartID="item.ref"
                                v-model:chartOption="item.chartOption"
                            />
                        </div>
                        <div class="main-page">
                            <el-pagination
                                layout="prev, pager, next"
                                :total="item.typeNameList.length"
                                :page-size="1"
                                :pager-count="5"
                                v-model:current-page="item.currPage"
                                @current-change="setCurrPage($event, item)"
                                small
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="city-center">
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
                    <ul class="zb-list">
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
                        <ul class="sub-zb-list">
                            <li
                                v-for="(item, index) in zbSecondData"
                                :key="index"
                                @click="handleZbSecond(item)"
                                :class="
                                    item.typeName === currSecondVal
                                        ? 'focusFirst'
                                        : ''
                                "
                            >
                                {{ item.typeName }}
                            </li>
                        </ul>
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
            <div class="city-map" id="map"></div>
            <div class="legend" v-show="showLegend">
                <div class="legend-pic"></div>
                <div class="legend-txt">
                    <span>低</span>
                    <span>（指标强度）</span>
                    <span>高</span>
                </div>
            </div>
        </div>
        <div class="city-right">
            <div
                class="chart-item"
                v-for="(item, index) in zbAllData.slice(2)"
                :key="index"
                @mouseenter="overChartBox(item, false)"
                @mouseleave="overChartBox(item, true)"
            >
                <div class="chart-head">
                    <i class="chart-icon"></i>
                    <span class="chart-head-txt">{{ item.typeName }}</span>
                </div>
                <div class="chart-main">
                    <div class="main-title">
                        {{ item.typeNameList[item.currPage - 1].typeName }}
                    </div>
                    <div class="main-right-content">
                        <div class="main-content">
                            <Chart
                                :chartID="item.ref"
                                v-model:chartOption="item.chartOption"
                            />
                        </div>
                        <div class="main-page">
                            <el-pagination
                                layout="prev, pager, next"
                                :total="item.typeNameList.length"
                                :page-size="1"
                                :pager-count="5"
                                v-model:current-page="item.currPage"
                                @current-change="setCurrPage($event, item)"
                                small
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Chart from '../../components/chart/Chart.vue';
import { ElMessage } from 'element-plus';
import Basemap from '@arcgis/core/Basemap';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { getCityQualApi, getDataBySecApi } from './city-api';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import * as _ from 'lodash';
import * as identify from '@arcgis/core/rest/identify';
import IdentifyParameters from '@arcgis/core/rest/support/IdentifyParameters';
import Graphic from '@arcgis/core/Graphic';

const router = useRouter();

// 指标列表
const zbList = [
    { id: 1, label: '市辖区', path: '/city', isFocus: true },
    { id: 2, label: '区县', path: '/country', isFocus: false },
];
// 指标点击
const clickZB = (item: any) => {
    router.push(item.path);
};

// 指数
const handleZS = () => {
    ElMessage.warning('此功能后续开放...');
};

// 初始化地图
let mapView = <any>null;
const initMap = () => {
    // 默认显示0
    let featureLayer = new FeatureLayer({
        id: 'citylayer0',
        url: window.cityServer,
        outFields: ['*'],
        layerId: 0,
        visible: true,
        opacity: 0,
    });

    let imageLayer = new MapImageLayer({
        id: 'citylayer0',
        url: window.cityServer,
        imageFormat: 'png8',
        sublayers: [{ id: 0 }],
        effect: 'drop-shadow(10px 10px 20px #00a5f6)',
    });

    let groupLayer = new GroupLayer({
        id: 'grouplayer',
        visibilityMode: 'exclusive',
    });
    groupLayer.add(imageLayer);

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
        console.dir(mapView, 'mapview');
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
                console.log(evt, 'evt');
                let mapPoint = mapView.toMap({ x: evt.x, y: evt.y });

                const opts = {
                    include: featureLayer,
                };
                const foundLayer: any = groupLayer.allLayers.find((layer) => {
                    return layer.visible;
                });

                mapView.hitTest(evt, opts).then(async (response: any) => {
                    if (response.results.length) {
                        const highgraphic = response.results[0].graphic;
                        if (highlight) {
                            highlight.remove();
                        }
                        console.log(response.results, 'response.results');
                        highgraphic.symbol = {
                            type: 'simple-fill',
                            color: [0, 255, 255, 0.25],
                            outline: {
                                width: 0,
                            },
                        };
                        mapView.graphics.removeAll();
                        mapView.graphics.add(highgraphic);
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
                    const { data: chartRes } = await getDataBySecApi(data);
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
                            <div class="layer-txt">${currFirstVal.value}</div>
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
            }, 50)
        );
    });
};

// 图例显示
const showLegend = ref<boolean>(false);

// 指标总列表
const zbAllData = ref<any>([]);
// 指标查询列表
const zbFirstData = ref<any>([]);
// 获取市级指标列表
const getCityZbList = async () => {
    const { data: res } = await getCityQualApi();
    console.log(res, 'res');
    if (res.code === 200) {
        zbAllData.value = res.data;
        zbFirstData.value = res.data;
        zbSecondData.value = res.data[0].typeNameList;

        currFirstVal.value = res.data[0].typeName;
        currFirstItem.value = res.data[0];

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
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        top: '5%',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'value',
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
                            interval: 0,
                            color: 'rgba(255,255,255, 1)',
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: [],
                            },
                        },
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [],
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
                ref: `chartBox${index}`,
                currPage: 1,
                showLoop: true,
            });
            loopChart(item);
            setChartData(item);
        });
    } else {
        ElMessage.error(res.msg);
    }
};

let timer = <any>null;
// 定时渲染
const setChartData = async (item: any) => {
    timer = window.setInterval(async () => {
        loopChart(item);
    }, 8000);
};

// 循环图表数据
const loopChart = (item: any) => {
    if (item.showLoop) {
        item.currPage++;
        if (item.currPage > item.typeNameList.length) {
            item.currPage = 1;
        }
        setTimeout(async () => {
            let data = {
                typeName: item.typeNameList[item.currPage - 1].typeName,
            };
            const { data: chartRes } = await getDataBySecApi(data);
            let nameList: any = [];
            let valList: any = [];
            let colorList: any = [];
            chartRes.data.map((subItem: any) => {
                nameList.push(subItem.name);
                valList.push(subItem.value);
                colorList.push(subItem.color);
            });

            item.chartOption.yAxis.data = nameList;
            item.chartOption.yAxis.splitArea.areaStyle.color = colorList;
            item.chartOption.series[0].data = valList;
        }, 0);
    }
};

// 点击渲染
const renderChartData = async (item: any, currItem: any) => {
    console.log(item, 'item');
    console.log(currItem, 'currItem');

    let data = {
        typeName: currItem.typeName,
    };

    let currIndex = item.typeNameList.findIndex((obj: any) => {
        return obj.typeName == currItem.typeName;
    });

    item.currPage = currIndex + 1;

    const { data: chartRes } = await getDataBySecApi(data);
    let nameList: any = [];
    let valList: any = [];
    let colorList: any = [];
    chartRes.data.map((subItem: any) => {
        nameList.push(subItem.name);
        valList.push(subItem.value);
        colorList.push(subItem.color);
    });

    item.chartOption.yAxis.data = nameList;
    item.chartOption.yAxis.splitArea.areaStyle.color = colorList;
    item.chartOption.series[0].data = valList;

    let groupLayer = mapView.map.findLayerById('grouplayer');
    let isLayer = groupLayer.findLayerById(`citylayer${currItem.layerId}`);
    if (isLayer) return (isLayer.visible = true);

    const foundLayer: any = groupLayer.allLayers.find((layer: any) => {
        return layer.visible;
    });
    console.log(foundLayer);

    // 使用图层组特性
    groupLayer.add(
        new MapImageLayer({
            id: `citylayer${currItem.layerId}`,
            url: window.cityServer,
            imageFormat: 'png8',
            sublayers: [{ id: currItem.layerId }],
            effect: 'drop-shadow(10px 10px 20px #00a5f6)',
        })
    );
    showLegend.value = true;
};

onBeforeUnmount(() => {
    for (let i = 0; i <= timer; i++) {
        window.clearInterval(i);
    }
});

// 二级指标列表
const zbSecondData = ref<any>([]);

// 当前一级指标项
const currFirstVal = ref('');
const currFirstItem = ref<any>({});

// 一级指标点击
const handleZbFirst = (item: any) => {
    zbSecondData.value = item.typeNameList;
    currFirstVal.value = item.typeName;
    currFirstItem.value = item;
    console.log(item, 'item');
};
// 当前二级指标项
const currSecondVal = ref('');

// 显示选中二级指标
const showCurrZB = ref(false);

// 二级指标点击
const handleZbSecond = async (item: any) => {
    let focusDom = <any>document.getElementsByClassName('esri-popup')[0];
    if (focusDom) {
        focusDom.style.display = 'none';
    }
    mapView.graphics.removeAll();

    currSecondVal.value = item.typeName;
    showCurrZB.value = true;
    zbAllData.value.map(async (zbItem: any) => {
        if (zbItem.ref == currFirstItem.value.ref) {
            Object.assign(zbItem, currFirstItem.value, { showLoop: false });
            await renderChartData(zbItem, item);
        }
    });
};

onMounted(() => {
    initMap();
    getCityZbList();
});

// 图表鼠标移动事件
const overChartBox = (item: any, boo: boolean) => {
    if (item.typeNameList[item.currPage - 1].typeName == currSecondVal.value)
        return false;
    item.showLoop = boo;
};

// 关闭当前指标
const closeCurrZB = () => {
    let focusDom = <any>document.getElementsByClassName('esri-popup')[0];
    if (focusDom) {
        focusDom.style.display = 'none';
    }
    showCurrZB.value = false;
    zbAllData.value.map(async (zbItem: any) => {
        zbItem.showLoop = true;
    });

    let groupLayer = mapView.map.findLayerById('grouplayer');
    let defaultLayer = groupLayer.findLayerById(`citylayer0`);
    if (defaultLayer) return (defaultLayer.visible = true);
};

// 分页点击
const setCurrPage = async (event: any, item: any) => {
    console.log(item, 'item');
    currFirstVal.value = item.typeName;
    let focusDom = <any>document.getElementsByClassName('esri-popup')[0];
    if (focusDom) {
        focusDom.style.display = 'none';
    }

    await renderChartData(item, item.typeNameList[event - 1]);
};
</script>

<style scoped lang="scss">
@import './city.scss';
</style>
