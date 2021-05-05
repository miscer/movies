import { createApp } from "vue";
import App from "./App.vue";
import { setupMockApi } from "@/api/browser.js";

setupMockApi();

createApp(App).mount("#app");
