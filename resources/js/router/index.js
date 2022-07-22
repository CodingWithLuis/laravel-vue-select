import { createRouter, createWebHistory } from "vue-router";

import ProjectsIndex from '../components/projects/Index.vue'

const routes = [
    {
        path: '/home',
        name: 'projects.index',
        component: ProjectsIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
