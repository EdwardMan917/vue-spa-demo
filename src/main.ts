import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VantUI from "@/vant.config";

const app = createApp(App);

// register Vant UI components. Ref: https://github.com/youzan/vant/issues/7056
new VantUI(app);
app.use(store);
app.use(router);
app.mount("#app");
