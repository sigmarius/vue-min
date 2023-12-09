import { createApp } from 'vue'
import App from './App.vue'

import components from '@/components/UI';

const app = createApp(App);

components.map(uiComponent => app.component(uiComponent.name, uiComponent))

app.mount('#app')

