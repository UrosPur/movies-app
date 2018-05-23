<template>
    <div>
        <div class="row">
                <h2>add movie</h2>

            <movie-search
                    @search-term-change="onSearchTermChanged"
                    class="mt-4"
            />

                <b-form @submit="addMovie">

                    <b-form-group label="Title:">
                        <b-form-input type="text" v-model="movie.title" placeholder="Enter movie title">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Director:">
                        <b-form-input type="text" v-model="movie.director" placeholder="Enter director name">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="imageUrl:">
                        <b-form-input type="text" v-model="movie.imageUrl" placeholder="enter image imageUrl">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Movie duration:">
                        <b-form-input type="text" v-model="movie.duration" placeholder="Enter movie duration">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Movies realise date:">
                        <b-form-input type="text" v-model="movie.releaseDate" placeholder="Enter movies realise date">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Movie genre:">
                        <b-form-input type="text" v-model="movie.genre" placeholder="Enter movie genre">
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>

                </b-form>
        </div>
        <div class="row">
            <div class="col-sm-5">
                <h3>Search movies</h3>
                <MovieSearch/>
                <h2>movie list</h2>
                <MovieRow
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"

                />
            </div>

        </div>
    </div>
</template>

<script>

    import {filmServices} from "../services/MoviesServices";
    import MovieRow from "./MovieRow.vue";
    import MovieSearch from "./MovieSearch.vue"


    export default {
        name: "AppMovies",
        components: {
            MovieRow,
            MovieSearch

        },

        created() {

            // this.getAllMovies()
        },

        data() {

            return {

                movies: [],

                movie: {

                    title: "",
                    director: "",
                    imageUrl: "",
                    duration: "",
                    releaseDate: "",
                    genre: "",


                }

            }
        },

        methods:
            {
                addMovie() {

                    filmServices.add(this.movie)

                    this.router.push('movies')
                }
            },

        beforeRouteEnter(to, from, next) {
            filmServices.getAll()
                .then(({data}) => {
                    // console.log({data})
                    next((vm) => {
                        // console.log(vm)
                        vm.movies = data;
                    })

                })

        }

    }
</script>

<style scoped>

</style>