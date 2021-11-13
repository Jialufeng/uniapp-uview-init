<!--
 * @Author: your name
 * @Date: 2021-11-01 17:52:29
 * @LastEditTime: 2021-11-13 16:52:09
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
                <view @click="handleSearch(item)" class="u-flex-1" v-for="(item, index) in brand" :key="index">
                    <u-image class="brand-img" :src="item.img" width="72rpx" height="72rpx"></u-image>
                    <view class="brand">{{ item.name }}</view>
                </view>
            </view>
            <view class="type-list">
                <u-row gutter="16">
                    <u-col span="3" @click="handleSearch(item)" v-for="(item, index) in type" :key="index">
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
                <!-- 先用后买 -->
                <view v-if="current == 0">
                    <view class="first-box u-border-bottom">
                        <view class="u-flex u-row-between">
                            <view class="brand">奥迪 A6L 2021款｜臻选致雅 45TFSI</view>
                            <view class="price"><text>9,000</text>/月</view>
                        </view>
                        <view class="first-box-info">
                            <view class="box-info-text">厂商指导价：xx万</view>
                            <view class="box-info-text">最短合约期：：xx万</view>
                            <view class="box-info-text">新旧程度：：xx万</view>
                            <view class="car-img">
                                <u-image width="100%"  height="100%" src="/static/2222.png"></u-image>
                            </view>
                        </view>
                    </view>
                    <view class="first-box u-border-bottom">
                        <view class="u-flex u-row-between">
                            <view class="brand">奥迪 A6L 2021款｜臻选致雅 45TFSI</view>
                            <view class="price"><text>9,000</text>/月</view>
                        </view>
                        <view class="first-box-info">
                            <view class="box-info-text">厂商指导价：xx万</view>
                            <view class="box-info-text">最短合约期：：xx万</view>
                            <view class="box-info-text">新旧程度：：xx万</view>
                            <view class="car-img">
                                <u-image width="100%"  height="100%" src="/static/2222.png"></u-image>
                            </view>
                        </view>
                    </view>
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
        handleSearch(item) {
            this.$router.push('/pages/selection/search/menu')
        },
        change(index) {
            this.current = index;
        }
    },
};
</script>

<style lang="scss" scoped>
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
    .first-box {
        padding: 30rpx 8rpx;
        .first-box-info {
            position: relative;
            margin-top: 40rpx;
            .box-info-text {
                color: #64696F;
                font-size: 24rpx;
                margin: 4rpx 0;
            }
            .car-img {
                position: absolute;
                right: 0;
                bottom: -30rpx;
                width: 175rpx * $double;
                height: 160rpx;
            }
        }
        .brand {
            font-size: 28rpx;
            color: rgba(10, 15, 45, 0.8);
        }
        .price {
            color: #F51A4E;
            font-size: 24rpx;
            font-weight: 500;
            text {
                font-size: 34rpx;
            }
        }
    }
}
</style>
