<template>
    <div>
        This is movies page
    </div>
</template>

<script>

    import {filmServices} from "../services/MoviesServices";


    export default {
        name: "AppMovies",

        data() {

            return {

                movies: []

            }
        },

        methods:
            {
                getAllMovies() {

                    filmServices.getAll()
                        .then

                }
            }


    }
</script>

<style scoped>

</style>