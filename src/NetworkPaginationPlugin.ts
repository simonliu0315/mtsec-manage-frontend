// This is where the package installs.
import type { App } from "vue";
import { NetworkPagination } from "@/components";

export default {
  install: (app: App) => {
    app.component("NetworkPagination", NetworkPagination);
  },
};

export { NetworkPagination };