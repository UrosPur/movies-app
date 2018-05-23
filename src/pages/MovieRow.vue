<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">movie id</th>
                <th scope="col">Title</th>
                <th scope="col">Director</th>
                <th scope="col">image Url</th>
                <th scope="col">release date</th>
                <th scope="col">genre</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th scope="row">{{ movie.id}}</th>
                <td>{{ movie.title}}</td>
                <td>{{ movie.director}}</td>
                <td>{{ movie.imageUrl}}</td>
                <td>{{ movie.releaseDate}}</td>
                <td>{{ movie.genre}}</td>
            </tr>
            </tbody>
        </table>

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