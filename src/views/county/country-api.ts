import request from '@/utils/request';

// 获取县区下的指标列表
export const getCountryQualApi = () => {
    return request({
        method: 'GET',
        url: '/highQuality/queryType/county',
    });
};

// 根据二级分类名称查询县区数据
export const getXqDataApi = (data: object) => {
    return request({
        method: 'POST',
        url: '/highQuality/queryData/county',
        data,
    });
};
