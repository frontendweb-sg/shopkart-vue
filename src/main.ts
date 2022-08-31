import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { appRoutes } from "./routes";
// app instance
const app = createApp(App);

// plugins
const pinia = createPinia();
app.use(pinia);
app.use(appRoutes);
// mount app
app.mount("#app");
