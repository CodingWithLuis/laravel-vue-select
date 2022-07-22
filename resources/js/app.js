import './bootstrap';

import ProjectsIndex from './components/projects/Index.vue'

import { createApp } from "vue";

import router from './router/index'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const app = createApp({
    components: {
        ProjectsIndex
    }
});

app.use(router)

app.component('v-select', vSelect)

app.mount('#app');
