import { API } from "@/axios";
import { defineStore } from "pinia";

/**
 * Page store
 */
const BASE_URL = "/page";
export const usePage = defineStore("page", {
  state: () => ({ loading: false, pages: null }),
  getters: {},
  actions: {
    async getAll() {
      this.loading = true;
      const response = await API.get(BASE_URL);
      this.loading = false;
      this.pages = response.data;
    },
    async getDetail() {},
    async addItem() {},
    async updateItem() {},
    async deleteItem() {},
  },
});
