import { createApp } from 'vue'
import App from './App.vue'

import components from '@/components/UI';
import router from "@/router/router";
import VIntersection from "@/directives/VIntersection";
import directives from "@/directives";

const app = createApp(App);

components.map(uiComponent => app.component(uiComponent.name, uiComponent));

// импорт одной директивы
//app.directive('intersection', VIntersection);

directives.map(
    directive => app.directive(directive.name, directive)
);

app
    .use(router)
    .mount('#app')

