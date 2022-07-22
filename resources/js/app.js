import './bootstrap';

import ProjectsIndex from './components/projects/Index.vue'

import { createApp } from "vue";

import router from './router/index'

const app = createApp({
    components: {
        ProjectsIndex
    }
});

app.use(router)

app.mount('#app');
