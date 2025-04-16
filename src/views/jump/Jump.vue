<template>
    <div class="jump-box" @click="handleJump"></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
// 任意点击页面跳转
const handleJump = () => {
    router.push('/login');
};
</script>

<style scoped lang="scss">
.jump-box {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/layout-images/jump.jpg') no-repeat center;
    background-size: 100% 100%;
}
</style>
