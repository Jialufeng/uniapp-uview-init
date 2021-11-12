/*
 * @Author: lufeng
 * @Date: 2021-11-01 16:27:58
 * @LastEditTime: 2021-11-09 22:18:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /super-butler/src/util.js
 */

// 开发
const serverUrl = process.env.NODE_ENV === 'development' ? 'https://wc.tigerlife.cn/' : "https://wc.tigerlife.cn/";


const url = {
    banner: 'app/home/bannerList'
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
