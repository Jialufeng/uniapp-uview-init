<!--
 * @Author: lufeng
 * @Date: 2021-11-01 17:52:29
 * @LastEditTime: 2021-11-16 16:36:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /butler-super/src/pages/index/index.vue
-->
<template>
    <view class="content">
        home
    </view>
</template>

<script>
const app = getApp();
export default {
    data() {
        return {
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
    },
};
</script>

<style lang="scss" scoped>

$double: 2;
.content {
   
    
}

</style>
