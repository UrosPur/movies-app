<template>
    <div>
        <b-list-group>
            <b-list-group-item>{{ movie.id}}</b-list-group-item>
            <b-list-group-item>{{ movie.title}}</b-list-group-item>
            <b-list-group-item>{{ movie.director}}</b-list-group-item>
            <b-list-group-item>{{ movie.imageUrl}}</b-list-group-item>
            <b-list-group-item>{{ movie.releaseDate}}</b-list-group-item>
            <b-list-group-item>{{ movie.genre}}</b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
    export default {
        name: "MovieRow",
        props: {
            movie: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style scoped>

</style>