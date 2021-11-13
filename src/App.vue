<!--
 * @Author: your name
 * @Date: 2021-11-01 20:05:38
 * @LastEditTime: 2021-11-13 19:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/App.vue
-->
<script>
export default {
    onLaunch: function() {
        wx.getSystemInfo({
            success: (e) => {
                const custom = wx.getMenuButtonBoundingClientRect();
                this.globalData.custom = custom;
                console.log(custom);
            },
        });
    },
    onShow: function() {
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    },
    globalData: {
        custom: {},
    },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */

.content {
    padding: 0 32rpx;
    color: rgba(10, 15, 45, 0.8);
    font-size: 24rpx;
}
.price-base {
    font-size: 28rpx;
    color: #f5194b;
    text {
        font-size: 56rpx;
        font-weight: 500;
        font-family: DIN;
    }
}
.divider-x {
    position: relative;
    &:after {
        content: "";
        background: rgba(10, 15, 45, 0.04);
        border-radius: 1px;
        width: 1px;
        height: 20px;
        position: absolute;
        right: 0;
        top: 20rpx;
        z-index: 2;
    }
    &:last-child {
        &:after {
            display: none;
        }
    }
}
</style>
