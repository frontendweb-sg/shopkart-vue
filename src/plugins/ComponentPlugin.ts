import type { App } from "vue";
import * as Components from "../components/controls";

export default {
  install(app: App) {
    for (const component in Components) {
      if (component in Components) {
        app.component(
          component,
          Components[component as keyof typeof Components]
        );
      }
    }
  },
};
