<template>
    <div class="relative pb-4">
        <label
                :for="name"
                class="text-blue-500 pt-2 uppercase text-xs font-bold absolute"
        >
            {{ label }}
        </label>

        <input
            :id="name"
            :value="value"
            type="text"
            class="pt-8 text-gray-900 w-full border-b pb-2 focus:outline-none focus:border-blue-400"
            :class="errorClassObject()"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @change="$emit('input', $event.target.value)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        >

        <p v-if="localError" class="text-red-600 text-sm">{{ localError[0] }}</p>
    </div>
</template>

<script>
export default {
    name: 'InputField',

    props: {
        value: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            required: true,
        },

        placeholder: {
            type: String,
            required: true,
        },

        error: {
            required: false,
            default: '',
        }
    },

    data: function() {
        return {
            localError: _.cloneDeep(this.error),
        }
    },

    methods: {
        clearErrors() {
            this.localError = null;
        },

        errorClassObject() {
            return {
                'error_field': !_.isEmpty(this.localError)
            }

        }
    },

    watch: {
        value() {
            this.clearErrors();
        },

        error() {
            this.localError = _.cloneDeep(this.error);
        },
    },
}
</script>

<style scoped>
    .error_field {
        @apply .border-red-500 .border-b-2
    }
</style>
