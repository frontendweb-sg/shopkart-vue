import { Color, Direction, Size } from "@/utils";
import { defineStore } from "pinia";

export interface IAlert {
  message: string;
  color?: string;
  visible?: boolean;
  size?: string;
  position?: string;
  transition?: string;
}

/**
 * Alert store
 * @returns
 */
const useAlertStore = defineStore({
  id: "alert",
  state: () =>
    ({
      visible: false,
      message: "",
      color: Color.success,
      size: Size.md,
      position: Direction.topRight,
      transition: "fade",
    } as IAlert),
  actions: {
    alertShow(payload: IAlert) {
      this.visible = true;
      this.$state = payload;
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
    alertHide() {
      this.$reset();
    },
  },
});

export { useAlertStore };
