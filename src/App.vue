<template>
    <div id="app">
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
<style lang="scss" scoped>
#app {
    @apply bg-gray-100 h-screen w-full py-2 md:py-5 flex justify-center items-center;
}
</style>
