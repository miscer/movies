import { createApp } from "vue";
import App from "./components/App.vue";
import { setupMockApi } from "@/mock-api/browser.js";

setupMockApi();

createApp(App).mount("#app");
