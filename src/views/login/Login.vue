<template>
    <div class="login-container">
        <div class="login-header"></div>
        <div class="login-main">
            <div class="login-left">
                <div
                    class="build-main animate__animated animate__shakeY animate__slower animate__infinite"
                ></div>
                <div class="build-base"></div>
            </div>
            <div class="login-right">
                <div class="login-tips">欢迎登录</div>
                <el-form :model="loginForm" size="large">
                    <el-form-item>
                        <el-input
                            v-model="loginForm.userName"
                            placeholder="请输入用户名"
                            clearable
                        >
                            <template #prefix>
                                <i class="iconfont icon-yonghu"></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            v-model="loginForm.password"
                            placeholder="请输入密码"
                            clearable
                            show-password
                        >
                            <template #prefix>
                                <i class="iconfont icon-yanzhengma"></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox
                            v-model="keepPassword"
                            label="记住密码"
                            size="large"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleLogin"
                            >登录</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { getLoginApi } from './login-api';

// 登录表单
const loginForm = reactive({
    userName: '',
    password: '',
});

// 是否保存密码
const keepPassword = ref(false);

// 登录
const router = useRouter();
const handleLogin = async () => {
    const { data: res } = await getLoginApi(loginForm);
    if (res.code === 200) {
        ElMessage.success('登录成功');
        sessionStorage.setItem('hightoken', res.data.token);
        sessionStorage.setItem('highname', res.data.name);
        if (keepPassword.value) {
            sessionStorage.setItem('highuser', loginForm.userName);
            sessionStorage.setItem('highpsd', loginForm.password);          
        } else {
            sessionStorage.removeItem('highuser');
            sessionStorage.removeItem('highpsd');
        }
        router.push('/city');
    } else {
        ElMessage.error(res.msg);
    }
};

onMounted(() => {
    if (sessionStorage.getItem('highuser') && sessionStorage.getItem('highpsd')) {
        keepPassword.value = true;
        Object.assign(loginForm, {
            userName: sessionStorage.getItem('highuser'),
            password: sessionStorage.getItem('highpsd'),
        });
    }
});
</script>

<style scoped lang="scss">
@import './login.scss';
</style>
