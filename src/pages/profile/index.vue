<!--
 * @Author: your name
 * @Date: 2021-11-12 23:21:25
 * @LastEditTime: 2021-11-14 10:26:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /fe-wc/src/pages/profile/index.vue
-->

<template>
    <view class="content">
        <view class="detail">
            <view class="detail-head">
                <view class="status-bar" :style="{ height: custom.top + 'px' }"></view>
                <view class="nav-custom  u-flex">
                    <image class="logo" src="/static/logo.svg"></image>
                </view>
                <view class="car-info u-flex u-row-between">
                    <view class="brand">
                        <text class="brand-t">奥迪 A6L</text>
                        <view class="brand-price">
                            指导价 44.38万
                        </view>
                    </view>
                    <view class="car-info-icon">
                        <u-image class="icon" width="32rpx" height="28rpx" src="/static/icon1.png"></u-image>
                        <u-image class="icon" width="28rpx" height="28rpx" src="/static/icon2.png"></u-image>
                    </view>
                </view>
                <view>
                    <u-image width="100%" height="300rpx" src="/static/1111.png"></u-image>
                </view>
                <view class="u-flex configure">
                    <view class="u-flex-1 item divider-x" v-for="(item, index) in type" :key="index">
                        <view class="title">{{item.name}}</view>
                        <view class="name">{{item.t}}</view>
                    </view>
                </view>
                <view class="model-box">
                    <scroll-view scroll-x class="model-scroll" >
                        <view class="item" :class="action == index ? 'active' :''" @click="handleModel(index)" v-for="(item, index) in model" :key="index">{{item.name}}</view>
                    </scroll-view>
                </view>
            </view>
            <view class="car-body">
                <view class="tabs">
                    <u-tabs :active-item-style="styleCustom"  active-color="#0A0F2D" inactive-color="#5e5e61" :list="listTabs" :is-scroll="true" :current="current" @change="changeTab"></u-tabs>
                </view>
                <view class="car-mode">
                    <template v-if="current == 0">
                        <view class="card">
                            <view class="car-mode-info u-border-bottom">
                                <u-image class="car-brand-logo" width="88rpx" height="88rpx"  src="/static/brand.png"></u-image>
                                <view class="mode-info-head">
                                    <view class="u-flex u-row-between">
                                        <view class="mode-info-brand u-flex-2">奔驰 AMG 2021款 45TFSI 臻选致雅</view>
                                        <view class="u-flex-2 price-base u-text-right"><text>9,900</text>/月</view>
                                    </view>
                                    <view class="mode-info-p u-flex">
                                        <view class="u-flex-1 divider-x">
                                            <view>44.38万</view>
                                            <view>指导价</view>
                                        </view>
                                        <view class="u-flex-1 divider-x">
                                            <view>3.38万</view>
                                            <view>购置税</view>
                                        </view>
                                        <view class="u-flex-1 divider-x">
                                            <view>6个月</view>
                                            <view>最小合约期</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class="car-des">
                                <view class="car-des-t">交车周期：<text>全新车交车周期预计30天内</text></view>
                                <view class="car-des-t">付款方式：<text>111</text></view>
                                <view class="car-des-t">车辆使用费：<text>110</text></view>
                                <view class="car-des-t">京牌使用费：<text>111</text></view>
                                <view class="car-des-t">保障服务费：<text>111</text></view>
                                <view class="car-des-t">车辆押金费：<text>111</text></view>
                                <view class="car-des-t">车辆使用费：<text>111</text></view>
                                <view class="car-des-t">合约期满后：<text>111</text></view>
                            </view>
                        </view>
                    </template>
                    <template v-if="current == 1">
                        <view class="card">
                            <view class="car-mode-info u-border-bottom">
                                <u-image class="car-brand-logo" width="88rpx" height="88rpx"  src="/static/brand.png"></u-image>
                                <view class="mode-info-head">
                                    <view class="u-flex u-row-between">
                                        <view class="mode-info-brand u-flex-2">奔驰 AMG 2021款 45TFSI 臻选致雅</view>
                                        <view class="u-flex-2 price-base u-text-right"><text>9,900</text>/月</view>
                                    </view>
                                    <view class="mode-info-p u-flex">
                                        <view class="u-flex-1 divider-x">
                                            <view>44.38万</view>
                                            <view>指导价</view>
                                        </view>
                                        <view class="u-flex-1 divider-x">
                                            <view>3.38万</view>
                                            <view>购置税</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        
                    </template>
                    <template v-if="current == 2">
                        平价租车
                    </template>
                    <template v-if="current == 3">
                        折扣新车
                    </template>
                    <template v-if="current == 4">
                        认证好车
                    </template>
                    
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
            current: 0,
            listTabs: [
                { name: "先用后买" },
                { name: "一层首付" },
                { name: "平价租车" },
                { name: "折扣新车" },
                { name: "认证好车" },
            ],
            action: 0,
            custom: app.globalData.custom,
            type: [
                {name: '汽油', t: '燃料形式'},
                {name: '2.0T', t: '燃料形式'},
                {name: '汽油', t: '燃料形式'},
                {name: '224', t: '马力(Ps)'}
            ],
            model: [
                {name: '2017款 TFSI 技术型'},
                {name: '2017款 TFSI 技术型'},
                {name: '2017款 TFSI 技术型'},
                {name: '2017款 TFSI 技术型'},
                {name: '2017款 TFSI 技术型'}
            ]
        };
    },
    onLoad() {},
    methods: {
        handleModel(index) {
            this.action = index;
        },
        changeTab(index) {
            this.current = index;
            console.log(index);
        }
    },
};
</script>

<style lang="scss" scoped>
.content {
    padding: 0;
    .logo {
        width: 84rpx * $double;
        height: 16rpx * $double;
        margin-left: 40rpx;
        margin-top: 26rpx;
    }
    .detail {
        .detail-head {
            background: linear-gradient(180deg, rgba(10, 15, 45, 0.16) 36.24%, rgba(255, 255, 255, 0.16) 100%);
            .car-info {
                margin-top: 40rpx;
                padding: 0 46rpx;
                .brand {
                    .brand-t {
                        font-size: 44rpx;
                        color: #0A0F2D;
                        font-weight: 600;
                    }
                    .brand-price {
                        background: url('/static/icon3.png') no-repeat;
                        background-size: 100%; 
                    }
                }
                .car-info-icon {
                    margin-right: -30rpx;
                    .icon {
                        display: inline-block;
                        vertical-align: middle;
                        margin: 0 20rpx;
                    }
                }
            }
            .configure {
                background: #FFFFFF;
                box-shadow: 0px -4px 32px rgba(10, 15, 45, 0.02), 0px 4px 24px rgba(10, 15, 45, 0.04);
                border-radius: 24rpx;
                margin: 0 32rpx;
                padding: 16rpx 0;
                color: rgba(10, 15, 45, 0.8);
                text-align: center;
                .item {
                   
                }
                .title {
                    font-size: 24rpx;
                    margin-bottom: 4rpx;
                    font-weight: 500;
                }
                .name {
                    font-size: 24rpx;
                    color: rgba(10, 15, 45, 0.5);
                }
            }
            .model-box {
                padding: 0 32rpx;
                margin-top: 40rpx;
                margin-left: -4rpx;
                margin-right: -4rpx;
                .model-scroll {
                    width: 100%;
                    overflow: hidden; 
                    white-space: nowrap;
                    .item {
                        background: rgba(10, 15, 45, 0.04);
                        border-radius: 8px;
                        padding: 12rpx 24rpx;
                        display: inline-block;
                        margin: 0 8rpx;
                        color: rgba(10, 15, 45, 0.8);
                    }
                    .active {
                        background: rgba(10, 235, 125, 0.6);
                        color: #0A0F2D;
                        font-weight: 500;
                    }
                }
            }
        }
        .car-body {
            margin-top: 50rpx;
            .car-mode {
                margin-top: 24rpx;
                .card {
                    margin: 0 32rpx;
                    background: #FFFFFF;
                    box-shadow: 0px -2px 32px rgba(10, 15, 45, 0.02), 0px 8px 24px rgba(10, 15, 45, 0.06);
                    border-radius: 24rpx;
                    padding: 36rpx 32rpx;
                    .car-mode-info {
                        position: relative;
                        margin-bottom: 32rpx;
                        padding-bottom: 32rpx;
                        .car-brand-logo {
                            position: absolute;
                            left: 0;
                            top: 0;
                            z-index: 1;
                            width: 88rpx;
                            height: 88rpx;
                            display: inline-block;
                        }
                        .mode-info-head {
                            margin-left: 112rpx;
                            .mode-info-brand {
                                font-size: 30rpx;
                                font-weight: 500;
                            }
                            .mode-info-p {
                                margin-top: 40rpx;
                                .divider-x {
                                     &:after { 
                                         right: 60rpx;
                                     }
                                }
                            }
                        }
                    }
                    .car-des {
                        .car-des-t {
                            position: relative;
                            color: rgba(10, 15, 45, 0.5);
                            font-size: 24rpx;
                            margin: 8rpx 0;
                            text {
                                position: absolute;
                                left: 145rpx;
                                top: 0;
                                z-index: 1;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
