<template>
    <div class="chart-box" :id="chartID"></div>
</template>

<script setup lang="ts">
import { toRefs, onMounted, watch, reactive, ref } from 'vue';
import * as echarts from 'echarts';
// 父组件传递参数
const props = defineProps({
    chartID: String,
    chartOption: Object,
});
let chartOption = reactive(props);

watch(
    chartOption,
    () => {
        getChat();
    },
    { deep: true }
);

let myChart: any = null;

// 渲染图表
const getChat = () => {
    if (myChart != null && myChart != '' && myChart != undefined) {
        myChart.dispose();
    }
    myChart = initChart();
    let option = props.chartOption;
    myChart.clear();
    myChart.setOption(option);
    window.addEventListener('resize', resizeMyChart);
};

// 获取渲染DOM
const initChart = () => {
    return echarts.init(
        document.getElementById(props.chartID as string) as HTMLElement
    );
};

// resize 监听
const resizeMyChart = () => {
    initChart().resize();
};

// 页面加载
onMounted(() => {
    getChat();
});
</script>

<style scoped lang="scss">
.chart-box {
    height: 100%;
}
</style>
