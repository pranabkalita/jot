<template>
    <contacts-list v-model="contacts" :update="update" :loading.sync="loading" />
</template>

<script>
import { mapActions } from 'vuex';
import ContactsList from '../Components/ContactsList.vue';


export default {
    name: 'ContactsIndex',

    components: {
        ContactsList,
    },

    data: () => ({
        contacts: [],
        loading: false,
    }),

    methods: {
        ...mapActions(['getAllContacts']),

        update: async function() {
            let response;

            try {
                response = this.contacts = await this.getAllContacts();
            } catch (error) {
                this.$router.push('/contacts');
            }

            return response;
        }
    },
}
</script>
