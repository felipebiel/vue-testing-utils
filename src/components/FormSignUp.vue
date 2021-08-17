<template>
    <div class="flex flex-row flex-wrap content-center space-y-6 teste">
        <h1 :class="{ active: activeTitle }" class="text-center text-3xl w-full">{{ msg }}</h1>
        <button
            @click="changeActive()"
            class="bg-blue-600 text-white rounded-sm py-3 px-5 m-auto shadow"
            id="active-button"
        >
            Tornar titulo atívo
        </button>
        <input type="text" class="w-full border border-gray-300 p-3 rounded-md mb-3" v-model="form.name" />
        <div class="text-red-500" v-if="$v.form.name.$error && !$v.form.name.required">Campos obrigatório</div>
        <div class="text-red-500" v-if="$v.form.name.$error && !$v.form.name.minLength">
            O nome deve ter {{ $v.form.name.$params.minLength.min }} caracteres.
        </div>

        <input type="text" class="w-full border border-gray-300 p-3 rounded-md mb-3" v-model="form.email" />
        <div class="text-red-500" v-if="$v.form.email.$error && !$v.form.email.required">Campos obrigatório</div>
        <div class="text-red-500" v-if="$v.form.email.$error && !$v.form.email.email">E-mail inválido</div>

        <div class="w-full">
            <input type="checkbox" v-model="form.termos" id="termos" class="mr-3 mb-3" />
            <label for="termos">Aceitar os termos</label>
            <div class="text-red-500" v-if="$v.form.termos.$error && !$v.form.termos.sameAs">Aceite os termos</div>
        </div>

        <button
            class="bg-blue-600 text-white rounded-sm py-3 px-5 m-auto w-full shadow"
            id="submit-button"
            @click="validateForm"
        >
            Salvar
        </button>
    </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'FormSignUp',
    data() {
        return {
            activeTitle: false,
            form: {
                name: '',
                email: '',
                termos: true,
            },
        };
    },
    props: {
        msg: String,
    },
    methods: {
        changeActive() {
            this.activeTitle = !this.activeTitle;
        },
        validateForm() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$emit('create-user', this.form);
            }
        },
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(4),
            },
            email: {
                required,
                email,
            },
            termos: {
                sameAs: sameAs(() => true),
            },
        },
    },
};
</script>
<style scoped>
h1.active {
    color: #42b983;
}
</style>
