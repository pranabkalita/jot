<template>
    <contacts-list v-model="contacts" :update="update" :loading.sync="loading" />
</template>

<script>
import { mapActions } from 'vuex';
import ContactsList from '../Components/ContactsList.vue';


export default {
    name: 'BirthdaysIndex',

    components: {
        ContactsList,
    },

    data: function () {
        return {
            contacts: [],
            loading: false,
        }
    },

    methods: {
        ...mapActions(['getAllBirthdays']),

        update: async function() {
            let response;

            try {
                response = await this.getAllBirthdays();
            } catch (error) {
                this.$router.push('/contacts');
            }

            return response;
        }
    },
}
</script>
