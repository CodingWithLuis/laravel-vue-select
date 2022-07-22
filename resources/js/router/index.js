import { createRouter, createWebHistory } from "vue-router";

import ProjectsIndex from '../components/projects/Index.vue'
import ProjectsCreate from '../components/projects/Create.vue'

const routes = [
    {
        path: '/home',
        name: 'projects.index',
        component: ProjectsIndex
    },
    {
        path: '/projects/create',
        name: 'projects.create',
        component: ProjectsCreate
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
