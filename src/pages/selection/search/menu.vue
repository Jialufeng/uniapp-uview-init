<!--
 * @Author: your name
 * @Date: 2021-11-12 23:29:22
 * @LastEditTime: 2021-11-13 16:16:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /fe-wc/src/pages/index/search/index.vue
-->

<template>
    <view class="content">
        
        <view>
            <view class="scroll-box">
                <scroll-view scroll-x class="tag-box" >
                    <u-tag text="试试" class="item" mode="dark" bg-color="#fff" color="#0A0F2D"  closeable  @close="tagClick"/>
                    <u-tag text="试试" class="item" mode="dark" bg-color="#fff" color="#0A0F2D"  closeable  @close="tagClick"/>
                    <u-tag text="试试" class="item" mode="dark" bg-color="#fff" color="#0A0F2D"  closeable  @close="tagClick"/>
                    <u-tag text="试试" class="item" mode="dark" bg-color="#fff" color="#0A0F2D"  closeable  @close="tagClick"/>
                    <u-tag text="试试" class="item" mode="dark" bg-color="#fff" color="#0A0F2D"  closeable  @close="tagClick"/>
                </scroll-view>
                <view class="reset">重置</view>
                
            </view>
            <view class="u-menu-wrap">
                <scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
                    <view v-for="(item,index) in menu" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']" :data-current="index" @tap.stop="swichMenu(index)">
                        <text class="u-line-1">{{item.name}}</text>
                    </view>
                </scroll-view>
                <view class="right">
                    <!-- <block > -->
                        <scroll-view scroll-y :scroll-with-animation="true" class="right-box"  :scroll-into-view="target" >
                            <view  class="page-view" v-for="(item,index) in menu" :key="index" >
                                <view class="class-item" :id="'item-' + index">
                                    <view class="item-title">
                                        <text>{{item.name}}</text>
                                    </view>
                                    <view class="item-container">
                                        <u-row gutter="16">
                                            <u-col span="4"  v-for="(items, i) in item.foods" :key="i">
                                                <view class="thumb-box" >{{items.tagName}}</view>
                                            </u-col>
                                        </u-row>
                                    </view>
                                </view>
                            </view>
                        </scroll-view>
                    <!-- </block> -->
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            target: '',
            menu: [
                { name: "品牌", id: 0 },
                { name: "车型", id: 0 },
                { name: "价格", id: 0 },
                { name: "车龄", id: 0 },
                { name: "能源", id: 0 },
                { name: "驱动", id: 0 },
                { name: "排量", id: 0 },
                { name: "马力", id: 0 },
                { name: "结构", id: 0 },
            ],
            foods: {},
            tabbar: [
                {
                    name: "品牌",
                    foods: [
                        {
                            name: "品牌",
                            key: "品牌1",
                            icon:
                                "https://cdn.uviewui.com/uview/common/classify/1/1.jpg",
                            cat: 10,
                        },
                        {
                            name: "品牌2",
                            key: "品牌3",
                            icon:
                                "https://cdn.uviewui.com/uview/common/classify/1/2.jpg",
                            cat: 10,
                        },
                    ],
                },
                {
                    name: "品牌1",
                    foods: [
                        {
                            name: "品牌22",
                            key: "品牌1",
                            icon:
                                "https://cdn.uviewui.com/uview/common/classify/1/1.jpg",
                            cat: 10,
                        },
                        {
                            name: "品牌332",
                            key: "品牌3",
                            icon:
                                "https://cdn.uviewui.com/uview/common/classify/1/2.jpg",
                            cat: 10,
                        },
                    ],
                },
                {
                    name: "品牌23",
                    foods: [
                        {
                            name: "品牌33",
                            key: "品牌1",
                            icon:
                                "https://cdn.uviewui.com/uview/common/classify/1/1.jpg",
                            cat: 10,
                        },
                        {
                            name: "品牌2",
                            key: "品牌3",
                            icon:
                                "https://cdn.uviewui.com/uview/common/classify/1/2.jpg",
                            cat: 10,
                        },
                    ],
                },
            ],
            scrollTop: 100, //tab标题的滚动条位置
            current: 0, // 预设当前项的值
            menuHeight: 0, // 左边菜单的高度
            menuItemHeight: 0, // 左边菜单item的高度
        };
    },
    onLoad() {
        this.init();
    },
    methods: {
        async init() {
            const data = await this.$getRequest( this.$url.getCarTypeCondition, "POST",{});
            this.foods = data.data;
            this.menu[1].foods = data.data.mold;
            this.menu[2].foods = data.data.guidancePrice;
            this.menu[4].foods = data.data.powerMode;
            this.menu[5].foods = data.data.drive;
            this.menu[6].foods = data.data.dischargeRange;
            this.menu[7].foods = data.data.horsepower;
            this.menu[8].foods = data.data.structure;
            
            
            console.log(data);
        },
        // 点击左边的栏目切换
        async swichMenu(index) {
            this.target = `item-${index}`;
            console.log( this.target);
            if (index == this.current) return;
            this.current = index;
            // 如果为0，意味着尚未初始化
            if (this.menuHeight == 0 || this.menuItemHeight == 0) {
                await this.getElRect("menu-scroll-view", "menuHeight");
                await this.getElRect("u-tab-item", "menuItemHeight");
            }
            // 将菜单菜单活动item垂直居中
            this.scrollTop =
                index * this.menuItemHeight +
                this.menuItemHeight / 2 -
                this.menuHeight / 2;
        },
        // 获取一个目标元素的高度
        getElRect(elClass, dataVal) {
            new Promise((resolve, reject) => {
                const query = uni.createSelectorQuery().in(this);
                query
                    .select("." + elClass)
                    .fields({ size: true }, (res) => {
                        // 如果节点尚未生成，res值为null，循环调用执行
                        if (!res) {
                            setTimeout(() => {
                                this.getElRect(elClass);
                            }, 10);
                            return;
                        }
                        this[dataVal] = res.height;
                    })
                    .exec();
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.content {
    padding: 0;
    .scroll-box {
        position: relative;
        padding: 24rpx 32rpx;
        padding-right: 100rpx;
        background: rgba(10, 15, 45, 0.04);

        .tag-box {
            width: 100%;
            overflow: hidden; 
            white-space: nowrap;
            .item {
                margin: 0 6rpx;
            }
        }
        .reset {
            position: absolute;
            right: 20rpx;
            top: 30rpx;
            z-index: 2;
            font-size: 24rpx;
            color: rgba(10, 15, 45, 0.8);
        }
    }
    
    .u-wrap {
        height: calc(100vh);
        /* #ifdef H5 */
        height: calc(100vh - var(--window-top));
        /* #endif */
        display: flex;
        flex-direction: column;
    }
    .page-view {
        .thumb-box {
            background: rgba(10, 15, 45, 0.04);
            font-size: 24rpx;
            text-align: center;
            color: rgba(10, 15, 45, 0.8);
            padding: 16rpx 0;
            margin: 10rpx 0;
            border-radius: 8rpx;
        }
    }

    .u-search-box {
        padding: 18rpx 30rpx;
    }

    .u-menu-wrap {
        position: relative;
        flex: 1;
        display: flex;
        overflow: hidden;
        .right {
            width: 100%;
            .right-box {
                width: 100%; 
                overflow: hidden; 
                white-space: nowrap;
                height: 100%;
                position: absolute;
                left: 160rpx;
                top: 0;
            }
        }
    }

    .u-search-inner {
        background-color: rgb(234, 234, 234);
        border-radius: 100rpx;
        display: flex;
        align-items: center;
        padding: 10rpx 16rpx;
    }

    .u-search-text {
        font-size: 26rpx;
        color: $u-tips-color;
        margin-left: 10rpx;
    }

    .u-tab-view {
        width: 200rpx;
        height: 100%;
    }

    .u-tab-item {
        height: 110rpx;
        background: #f6f6f6;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        color: #64696F;
        font-weight: 500;
        line-height: 1;
    }

    .u-tab-item-active {
        position: relative;
        color: #0A0F2D;
        font-size: 34rpx;
        font-weight: 500;
        background: #fff;
    }

    .u-tab-item-active::before {
        content: "";
        position: absolute;
        border-left: 4px solid $uni-color-success;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 0 10rpx 10rpx 0;
    }

    .u-tab-view {
        height: 100%;
    }
    .item-container {
        padding-right: 160rpx;
    }

    .class-item {
        margin-bottom: 30rpx;
        background-color: #fff;
        padding: 16rpx;
        border-radius: 8rpx;
    }

    .item-title {
        font-size: 30rpx;
        color: $u-main-color;
        font-weight: bold;
        margin-bottom: 24rpx;
    }
}
</style>
