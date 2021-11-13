<!--
 * @Author: your name
 * @Date: 2021-11-01 17:52:29
 * @LastEditTime: 2021-11-12 23:18:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/pages/index/index.vue
-->
<template>
    <view class="content">
        <view class="index">
            <view class="status-bar" :style="{ height: custom.top + 'px' }"></view>
            <view class="nav-custom u-flex">
                <image class="logo" src="/static/logo.svg"></image>
            </view>
            <view class="banner">
                <u-swiper :list="list"></u-swiper>
            </view>
            <view class="brand-list u-flex">
                <view class="u-flex-1" v-for="(item, index) in brand" :key="index">
                    <u-image class="brand-img" :src="item.img" width="72rpx" height="72rpx"></u-image>
                    <view class="brand">{{ item.name }}</view>
                </view>
            </view>
            <view class="type-list">
                <u-row gutter="16">
                    <u-col span="3" v-for="(item, index) in type" :key="index">
                        <view class="item">{{ item.name }}</view>
                    </u-col>
                </u-row>
            </view>
            <view class="collage">
                <u-section title="WE拼团" :show-line="false" font-size="34" sub-title="更多"></u-section>
            </view>
            <view class="tabs-swiper">
                <view class="tabs">
                    <u-tabs :active-item-style="styleCustom"  active-color="#0A0F2D" inactive-color="#5e5e61" :list="listTabs" :is-scroll="true" :current="current" @change="change"></u-tabs>
                </view>
                <view v-if="current == 0">
                    先用后买
                </view>
                <view v-if="current == 1">
                    一层首付
                </view>
                <view v-if="current == 2">
                    平价租车
                </view>
                <view v-if="current == 3">
                    折扣新车
                </view>
                <view v-if="current == 4">
                    认证好车
                </view>
            </view>
        </view>
    </view>
</template>

<script>
const app = getApp();
export default {
    data() {
        return {
            styleCustom: {
            },
            listTabs: [
                { name: "先用后买" },
                { name: "一层首付" },
                { name: "平价租车" },
                { name: "折扣新车" },
                { name: "认证好车" },
            ],
            current: 0,
            custom: app.globalData.custom,
            title: "Hello",
            list: ["/static/banner1.png", "/static/banner1.png"],
            brand: [
                { name: "奔驰", img: "/static/brand.png" },
                { name: "奔驰", img: "/static/brand.png" },
                { name: "奔驰", img: "/static/brand.png" },
                { name: "奔驰", img: "/static/brand.png" },
                { name: "奔驰", img: "/static/brand.png" },
            ],
            type: [
                { name: "轿车" },
                { name: "SUV" },
                { name: "MPV" },
                { name: "跑车" },
                { name: "30万以内" },
                { name: "30-100万" },
                { name: "100-300万" },
                { name: "更多条件" },
            ],
        };
    },
    onLoad() {
        this.init();
    },
    methods: {
        async init() {
            const data = await this.$getRequest(this.$url.banner, "POST", {
                cityId: 1,
            });
            console.log(data);
        },
        change(index) {
            this.current = index;
        }
    },
};
</script>

<style lang="scss" scoped>
$double: 2;
.content {
    .index {
        .logo {
            width: 84rpx * $double;
            height: 16rpx * $double;
            margin-left: 0rpx;
            margin-top: 26rpx;
        }
        .banner {
            margin-top: 20rpx;
        }
        .brand-list {
            text-align: center;
            margin-top: 40rpx;

            .brand-img {
                display: inline-block;
            }
            .brand {
                color: rgba(10, 15, 45, 0.8);
                font-size: 24rpx;
                margin-top: 4rpx;
            }
        }
        .type-list {
            margin-top: 16rpx;
            .item {
                width: 74rpx * $double;
                height: 60rpx;
                line-height: 60rpx;
                text-align: center;
                // margin: 0 8rpx;
                background: rgba(10, 15, 45, 0.04);
                margin-top: 24rpx;
                border-radius: 8rpx;
            }
        }
        .collage {
            margin-top: 64rpx;
        }
    }
}
</style>
