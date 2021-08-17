<template>
    <div id="app" class="bg-gray-100 h-screen w-100 py-5">
        <SignUp />
    </div>
</template>

<script>
import SignUp from './components/SignUp.vue';

export default {
    name: 'App',
    components: {
        SignUp,
    },
};
</script>
