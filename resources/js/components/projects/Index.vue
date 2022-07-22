<template>
    <div>Este es el componente index</div>

    <li v-for="project in projects" :key="project.id">
        {{ project.name }}
    </li>
</template>
<script>
import { onMounted } from 'vue';
import useProjects from '../../composables/projects';

export default {
    setup() {
        const { projects, getProjects } = useProjects();

        onMounted(getProjects);

        return {
            projects,
        };
    },
};
</script>
