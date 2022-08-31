import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { appRoutes } from "./routes";

import AdminLayoutVue from "./layout/AdminLayout.vue";
// app instance
const app = createApp(App);

app.component("admin-layout", AdminLayoutVue);
// plugins
const pinia = createPinia();
app.use(pinia);
app.use(appRoutes);
// mount app
app.mount("#app");
