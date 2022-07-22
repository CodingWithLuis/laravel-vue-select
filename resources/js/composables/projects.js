import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"

export default function useProjects() {

    const projects = ref([])
    const router = useRouter()
    const errors = ref('')

    const getProjects = async () => {

        const response = await axios.get('/api/projects');

        projects.value = response.data.data
    }

    const storeProject = async (data) => {

        try {

            await axios.post('/api/projects', data)
            await router.push({ name: 'projects.index' })

        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    return {
        getProjects,
        storeProject,
        projects,
        errors
    }

}
