import { ref } from "vue";
import axios from "axios";

export default function useStatuses() {

    const statuses = ref([])

    const getStatuses = async () => {

        const response = await axios.get('/api/statuses');

        statuses.value = response.data.data
    }

    return {
        getStatuses,
        statuses,
    }

}
