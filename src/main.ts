import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// ArcGIS
import '@arcgis/core/assets/esri/themes/light/main.css';

import esriConfig from '@arcgis/core/config';

// 微件资源引用
esriConfig.assetsPath = './arcgis_assets';
//arcgis字体文件引用
esriConfig.fontsUrl = './arcgis_fonts';

// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// iconfont
import '@/assets/iconfonts/iconfont.css';
import '@/assets/iconfonts/iconfont';

// animate.css
import 'animate.css/animate.min.css';

// 引入其他样式
import '@/assets/style/common.scss';

const app = createApp(App);

app.use(ElementPlus);

app.use(createPinia());
app.use(router);

app.mount('#app');
