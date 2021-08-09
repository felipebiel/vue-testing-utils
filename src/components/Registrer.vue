<template>
    <div class="mt-5 flex justify-center">
        <div class="rounded-md p-10 bg-white w-3/6 shadow-lg">
            <FormRegistrer msg="Formulário de cadastro" />
        </div>
    </div>
</template>

<script>
import FormRegistrer from './FormRegistrer.vue';

export default {
    components: {
        FormRegistrer,
    },
};
</script>
