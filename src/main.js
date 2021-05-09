import { createApp } from "vue";
import App from "./components/App.vue";
import { setupMockApi } from "@/api/browser.js";

setupMockApi();

createApp(App).mount("#app");
