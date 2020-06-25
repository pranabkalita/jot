<template>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Logout",

    methods: {
      ...mapActions(['logout']),
    },

    async created() {
        try {
            await this.logout();
        } finally {
            window.location = '/login';
        }
    }
}
</script>

<style scoped>

</style>
