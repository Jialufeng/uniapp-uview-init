/*
 * @Author: lufeng
 * @Date: 2021-11-01 16:27:58
 * @LastEditTime: 2021-11-16 16:35:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /super-butler/src/util.js
 */

// 接口
const serverUrl = process.env.NODE_ENV === 'development' ? 'https://wc.tigerlife.cn/' : "https://wc.tigerlife.cn/";


const url = {
    banner: 'app/home/bannerList', //banner 列表
}

/**
 * @description: 请求
 * @param {url, method, data}
 * @return:
 */
const getRequest = (url, method, data) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: serverUrl + url,
            method: method,
            data: data,
            headers: {
                'Content-Type': 'application/json',
            },
            success: (res) => {
            
                console.log(res.data);
                resolve(res.data)
            },
            fail(err) {
                console.log(err)
            }
        });
    });
};






export {
    url,
    getRequest,
}
