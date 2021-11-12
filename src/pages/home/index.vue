<!--
 * @Author: your name
 * @Date: 2021-11-01 17:52:29
 * @LastEditTime: 2021-11-11 23:33:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/pages/index/index.vue
-->
<template>
    <view class="content">
    </view>
</template>

<script>
const app = getApp();
export default {
    data() {
        return {
            custom: app.globalData.custom,
            list: ['/static/banner1.png', '/static/banner1.png'],
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
        },
    },
};
</script>

<style lang="scss" scoped>

$double: 2;
.content {
   
    
}

</style>
