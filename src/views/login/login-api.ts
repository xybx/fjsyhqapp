import request from '@/utils/request';

// 登录
export const getLoginApi = (data: any) => {
    return request({
        method: 'POST',
        url: '/login/loginName',
        data,
    });
};
