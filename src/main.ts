import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import "./assets/main.css";
import config from "@/config";
console.log("app config: ", config);

import request from "@utils/request";
import storage from "@utils/storage";

const app = createApp(App);

app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;

app.use(createPinia());
app.use(router);

app.mount("#app");
