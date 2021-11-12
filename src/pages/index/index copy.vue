<!--
 * @Author: your name
 * @Date: 2021-11-01 17:52:29
 * @LastEditTime: 2021-11-02 11:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/pages/index/index.vue
-->
<template>
    <view class="content">
        <image class="logo" @click="route" src="/static/logo.png"></image>
        <view >
			<button type="default" @click="test" >{{title}}</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: "Hello",
        };
    },
    onLoad() {
        // console.log(url);
        console.log(this.$url);
    },
    methods: {
        test() {
            uni.navigateTo({
                url: `/pages/login`,
            });
        },
        route() {
			this.$router.push('/pages/login')
        },
    },
};
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logo {
        height: 100rpx;
        width: 100rpx;
        margin: 200rpx auto 50rpx auto;
    }
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
