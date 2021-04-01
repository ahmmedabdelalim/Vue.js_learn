import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./scss/main.scss";

createApp(App).use(store).use(router).mount("#app");
//Vue.config.productionTip = false ;
/*
new Vue ({
router,
store,
render: h => h(App)     
}).$mount("#app");*/