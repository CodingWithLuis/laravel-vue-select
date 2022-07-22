import { createRouter, createWebHistory } from "vue-router";

const ProjectsIndex = () => import('../components/projects/Index.vue')
const ProjectsCreate = () => import('../components/projects/Create.vue')

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
