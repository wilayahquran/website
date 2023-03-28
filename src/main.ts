import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import "./assets/base.scss";

const app = createApp(App);

app.mount("#app");
