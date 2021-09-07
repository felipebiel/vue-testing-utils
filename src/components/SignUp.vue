<template>
    <div class="sing-up">
        <div class="sing-up-card">
            <FormSignUp msg="Formulário de cadastro" @create-user="createUserStore" />
        </div>
    </div>
</template>

<script>
import FormSignUp from './FormSignUp.vue';
import { mapActions } from 'vuex';

export default {
    name: 'SignUp',
    components: {
        FormSignUp,
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
<style lang="scss" scoped>
.sing-up {
    @apply mx-4 sm:mx-0 flex justify-center;
}

.sing-up-card {
    @apply rounded-md p-10 bg-white w-full sm:w-3/4 md:w-3/6 shadow-lg;
}
</style>
