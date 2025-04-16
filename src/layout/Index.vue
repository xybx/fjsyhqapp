<template>
    <div class="layout-container">
        <div class="layout-header">
            福建省城市建设高质量发展指标监测平台
            <div class="user-box">
                <span class="user-name">{{ currUser }}</span>
                <span class="exit-btn" @click="handleExit">退出</span>
            </div>
        </div>
        <div class="layout-main">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';

// 退出登录
const router = useRouter();
const handleExit = () => {
    sessionStorage.removeItem('highname');
    sessionStorage.removeItem('hightoken');
    router.push('/login');
};

// 当前用户名
const currUser = ref<any>('');

onMounted(() => {
    currUser.value = sessionStorage.getItem('highname');
});
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
