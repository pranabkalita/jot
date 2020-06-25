<template>
    <div>
        <div v-if="localLoading">Loading ...</div>

        <div v-else>
            <div v-if="contacts.length === 0">
                <p>No Contacts Yet. <router-link class="bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-400" to="/contacts/create">Get Started</router-link></p>
            </div>

            <div v-else v-for="contact in contacts" v-bind:key="contact.contact_id">
                <router-link
                    :to="`contacts/${contact.data.contact_id}`"
                    class="flex item-center border-b border-gray-400 hover:bg-gray-100 p-4"
                >
                    <user-circle :name="contact.data.name" />

                    <div class="pl-4">
                        <p class="text-blue-400 font-bold">{{ contact.data.name }}</p>
                        <p class="text-gray-600">{{ contact.data.company }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import UserCircle from './UserCircle.vue';

export default {
    name: 'ContactList',

    components: {
        UserCircle
    },

    props: {
        value: {
            type: Array,
            required: true,
        },

        update: {
            type: Function,
            required: true,
        },

        loading: {
            type: Boolean,
            required: true,
        }
    },

    data: function() {
        return {
            contacts: _.cloneDeep(this.value),
            localLoading: _.cloneDeep(this.loading),
        }
    },

    async created() {
        this.localLoading = true;
        this.contacts = await this.update();
        this.localLoading = false;
    },

    watch: {
        localLoading(value) {
            this.$emit('update:loading', value);
        },

        contacts(value) {
            this.$emit('update:input', value);
        }
    }
}
</script>
