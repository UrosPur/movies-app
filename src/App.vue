<template>
    <div id="app">
        <homeMenu/>
        <router-view></router-view>
    </div>
</template>

<script>

    import homeMenu from './components/homeMenu.vue'

    export default {
        name: 'app',
        components: {

            homeMenu

        }
    }
</script>


