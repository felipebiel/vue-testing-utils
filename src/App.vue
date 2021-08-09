<template>
    <div id="app" class="bg-gray-100 h-screen w-100 py-5">
        <Registrer />
    </div>
</template>

<script>
import Registrer from './components/Registrer.vue';

export default {
    name: 'App',
    components: {
        Registrer,
    },
};
</script>
