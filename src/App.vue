<!--
 * @Author: your name
 * @Date: 2021-11-01 20:05:38
 * @LastEditTime: 2021-11-11 23:17:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/App.vue
-->
<script>
export default {
    onLaunch: function () {
        wx.getSystemInfo({
            success: (e) => {
                const custom = wx.getMenuButtonBoundingClientRect();
                this.globalData.custom = custom;
                console.log(custom);
            },
        });
    },
    onShow: function () {
        console.log("App Show");
    },
    onHide: function () {
        console.log("App Hide");
    },
    globalData: {
        custom: {}
    }
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
</style>
