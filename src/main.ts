import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "boxicons/css/boxicons.min.css";
import "./assets/css/main.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(createPinia());

app.mount("#app");
