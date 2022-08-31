import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { appRoutes } from "./routes";

import AdminLayout from "@/layout/Admin/AdminLayout.vue";
import AuthLayout from "@/layout/Auth/AuthLayout.vue";
import UserLayout from "@/layout/User/UserLayout.vue";
import ComponentPlugin from "./plugins/ComponentPlugin";

// app instance
const app = createApp(App);

app.component("admin-layout", AdminLayout);
app.component("user-layout", UserLayout);
app.component("auth-layout", AuthLayout);

// plugins
app.use(ComponentPlugin);
const pinia = createPinia();
app.use(pinia);
app.use(appRoutes);
// mount app
app.mount("#app");

console.log(app);
