<template>
    <div class="mt-5 flex justify-center">
        <div class="rounded-md p-10 bg-white w-3/6 shadow-lg">
            <FormRegistrer msg="Formulário de cadastro" @create-user="createUserStore" />
        </div>
    </div>
</template>

<script>
import FormRegistrer from './FormRegistrer.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        FormRegistrer,
    },
    data() {
        return {
            userChecked: false,
        };
    },
    async created() {
        try {
            await this.checkUser();
            this.userChecked = true;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        ...mapActions(['storeUser']),
        createUserStore(form) {
            this.storeUser(form);
        },
        async checkUser() {
            return await new Promise((resolve) => setTimeout(resolve({ status: 200 }), 1000));
        },
    },
};
</script>
