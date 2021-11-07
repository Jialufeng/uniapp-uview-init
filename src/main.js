import Vue from "vue";
import App from "./App";
import { url, getRequest } from "./util";

import Router from './router';

import uView from "uview-ui"


Vue.config.productionTip = false;

Vue.prototype.$url = url;
Vue.prototype.$getRequest = getRequest;

Vue.prototype.$router = new Router();

Vue.use(uView);

App.mpType = "app";

const app = new Vue({
    ...App,
});
app.$mount();
