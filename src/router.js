/**
 * @exports
 * 全局路由管理
 */
 export default class Router {
    constructor() {
      console.log("global router class");
    }
    success () {
    //   console.log("跳转成功");
    }
    fail (err) {
      console.error("跳转失败：", err);
    }
    /**
     * 保留当前页面，跳转到应用内的某个页面。
     * @param { String } url 目标地址
     * @description 使用uni.navigateBack可以返回到原页面
     * @example this.$router.push(url); => 去往指定页面
     */
    push (url) {
      uni.navigateTo({
        url,
        success: this.success,
        fail: this.fail
      });
    }
    /**
     * 关闭当前页面，返回上一页面或多级页面。
     * @param { num } delta 返回层级
     * @description 可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
     * @example this.$router.back() => 返回上一页面
     */
    back (delta = 1) {
      uni.navigateBack({
        delta
      });
    }
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
     * @param { String } url 目标地址
     * @example this.$router.goGlobal(url) => 返回上一页面
     */
    goGlobal (url) {
      uni.switchTab({
        url,
        success: this.success,
        fail: this.fail
      })
    }
    /**
     * 关闭所有页面，打开到应用内的某个页面。
     * @param { String } url 目标地址
     * @example this.$router.redirect(url) => 重定向到目标页面
     */
    redirect (url) {
      uni.reLaunch({
        url
      });
    }
  }