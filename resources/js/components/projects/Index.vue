<template>
    <div class="btn btn-success">
        <router-link :to="{ name: 'projects.create' }" class="text-white"
            >Nuevo proyecto</router-link
        >
    </div>
    <table class="table table-bordered mt-3" id="user_table">
        <thead>
            <tr>
                <th>Projecto</th>
                <th>Descripcion</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects" :key="project.id">
                <td>{{ project.name }}</td>
                <td>{{ project.description }}</td>
                <td>{{ project.status.name }}</td>
            </tr>
        </tbody>
    </table>
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
