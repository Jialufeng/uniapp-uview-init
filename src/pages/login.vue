<!--
 * @Author: lufeng
 * @Date: 2021-11-01 17:52:29
 * @LastEditTime: 2021-11-02 12:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/pages/index/index.vue
-->
<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view class="login">
            <u-form :model="form" ref="uForm" class="u-border-bottom" >
                <u-form-item label="账号" :border-bottom="true" :label-style="{'fontWeight': 'bold'}" class="u-border-bottom" label-position="top"
                    ><u-input v-model="form.name"  
                /></u-form-item>
                <u-form-item label="密码" label-position="top"
                    ><u-input v-model="form.name" type="password" :border-bottom="true"
                /></u-form-item>
            </u-form>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: "login",
            form: {
                name: "",
            },
        };
    },
    onLoad() {
        // console.log(url);
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	.login {
		width: 100%;
		padding: 0 68rpx;
	}
    .logo {
        height: 86rpx;
        width: 86rpx;
        margin: 200rpx auto 50rpx auto;
    }

}
</style>
