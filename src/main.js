import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from "./router";
import { handle } from "./common/promise";

const app=createApp(App);
app.use(store);
app.use(router);
app.mixin({methods: {handle}});
app.mount("#app");