<template>
    <div class="mt-5 flex justify-center">
        <div class="rounded-md p-10 bg-white w-3/6 shadow-lg">
            <FormRegistrer msg="Formulário de cadastro" @create-user="createUserStore" />
        </div>
    </div>
</template>

<script>
import FormRegistrer from './FormRegistrer.vue';

export default {
    components: {
        FormRegistrer,
    },
    async created() {
        await this.checkUser();
    },
    methods: {
        createUserStore(form) {
            // console.log(form);
        },
        async checkUser() {
            return await new Promise((resolve) => setTimeout(resolve({ status: 200 }), 1000));
        },
    },
};
</script>
