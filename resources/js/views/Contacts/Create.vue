<template>
    <div>
        <div v-if="loading">Loading ...</div>

        <form v-else @submit.prevent="submitForm">

            <input-feild
                v-model="form.name"
                name="name"
                label="Contact Name"
                placeholder="Contact Name"
                :error="errors.name" />

            <input-feild
                v-model="form.email"
                name="email"
                label="Contact Email"
                placeholder="Contact Email"
                :error="errors.email" />

            <input-feild
                v-model="form.company"
                name="company"
                label="Company"
                placeholder="Company"
                :error="errors.company" />

            <input-feild
                v-model="form.birthday"
                name="birthday"
                label="Birthday"
                placeholder="MM/DD/YYYY"
                :error="errors.birthday" />

            <div class="flex justify-end">

                <button
                    class="py-2 px-4 rounded text-red-700 border mr-5 hover:border-red-700"
                    @click="$router.push('/contacts')"
                >Cancel</button>

                <button class="bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-400">
                    {{ buttonText }}
                </button>

            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import InputFeild from '../Components/Fields/InputField.vue';

const initialForm = {
    name: '',
    email: '',
    company: '',
    birthday: '',
}

export default {
    name: 'ContactsCreate',

    components: {
        InputFeild
    },

    data: () => ({
        form: _.cloneDeep(initialForm),
        errors: _.cloneDeep(initialForm),
        isEditMode: false,
        loading: false,
    }),

    computed: {
        buttonText: function() {
            return this.isEditMode ? 'Update Contact' : 'Add New Contact';
        },
    },

    methods: {
        ...mapActions(['createContact', 'getContact', 'updateContact']),

        async submitForm() {
            try {
                let response;

                if (this.isEditMode) {
                    response = await this.updateContact({
                        id: this.$route.params.id,
                        data: this.form,
                    });
                } else {
                    response = await this.createContact(this.form);
                }

                this.$router.push('/contacts/' + response.contact_id);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        }
    },

    async created() {
        if (this.$route.params.id) {
            this.loading = true;
            this.isEditMode = true;

            try {
                this.form = await this.getContact(this.$route.params.id);

                this.loading = false;
            } catch (error) {
                this.loading = false;

                this.$router.push('/contacts');
            }
        }
    },
}
</script>
