import { createApp } from "vue";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";
import { createPinia } from 'pinia'
const pinia = createPinia()
// Init App
createApp(App).use(pinia)
  .use(BoilerplatePlugin)
  .mount("#app");
