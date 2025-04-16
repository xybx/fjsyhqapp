import request from '@/utils/request';

// 获取市区分类列表
export const getCityQualApi = () => {
    return request({
        method: 'GET',
        url: '/highQuality/queryType/city',
    });
};

// 根据二级指标获取图表数据
export const getDataBySecApi = (data: any) => {
    return request({
        method: 'POST',
        url: '/highQuality/queryData/city',
        data,
    });
};
