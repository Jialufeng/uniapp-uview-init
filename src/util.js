/*
 * @Author: lufeng
 * @Date: 2021-11-01 16:27:58
 * @LastEditTime: 2021-11-02 11:06:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /super-butler/src/util.js
 */

// 开发
const serverUrl = process.env.NODE_ENV === 'development' ? 'xxx' : "https://xx";


const url = {
    login: 'login/123',
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
        });
    });
};






export {
    url,
    getRequest,
}
