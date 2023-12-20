import { createApp } from 'vue'
import App from './App.vue'

import components from '@/components/UI';
import router from "@/router/router";

const app = createApp(App);

components.map(uiComponent => app.component(uiComponent.name, uiComponent))

app
    .use(router)
    .mount('#app')

