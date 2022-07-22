<template>
    <div>
        <form @submit.prevent="saveProject">
            <div>
                <label for="name">Projecto</label>
                <div class="mt-1">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        v-model="form.name"
                    />
                </div>

                <div class="text-danger" v-if="errors && errors.name">
                    {{ errors.name[0] }}
                </div>
            </div>
            <div>
                <label for="description">Descripción</label>
                <div class="mt-1">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        class="form-control"
                        v-model="form.description"
                    />
                </div>

                <div class="text-danger" v-if="errors && errors.description">
                    {{ errors.description[0] }}
                </div>
            </div>
            <div>
                <div class="mt-1">
                    <label for="status_id">Status</label>
                    <v-select
                        :options="statuses"
                        v-model="form.status_id"
                        :reduce="(name) => name.id"
                        label="name"
                    />
                </div>

                <div class="text-danger" v-if="errors && errors.status_id">
                    {{ errors.status_id[0] }}
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
    </div>
</template>
<script>
import useProjects from '../../composables/projects';
import useStatuses from '../../composables/statuses';
import { reactive, onMounted } from 'vue';

export default {
    setup() {
        const form = reactive({
            name: '',
            description: '',
            status_id: '',
        });

        const { errors, storeProject } = useProjects();
        const { statuses, getStatuses } = useStatuses();

        onMounted(getStatuses);

        const saveProject = async () => {
            await storeProject({ ...form });
        };

        return {
            form,
            errors,
            saveProject,
            statuses,
            getStatuses,
        };
    },
};
</script>
