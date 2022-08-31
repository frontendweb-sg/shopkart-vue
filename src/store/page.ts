import { API } from "@/axios";
import { defineStore } from "pinia";
import { errorHandler } from "./helper";

/**
 * Page store
 */
const BASE_URL = "/page";
export const usePageStore = defineStore({
  id: "page",
  state: () => ({ loading: false, pages: null }),
  getters: {},
  actions: {
    async getAll() {
      try {
        this.loading = true;
        const response = await API.get(BASE_URL);
        this.loading = false;
        this.pages = response.data;
      } catch (error: any) {
        const message = errorHandler(error);
        console.log(message);
      }
    },
    // async getDetail() {},
    //async addItem() {},
    //async updateItem() {},
    //async deleteItem() {},
  },
});
