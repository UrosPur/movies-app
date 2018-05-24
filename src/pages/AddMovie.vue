<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <form @submit.prevent="addMovie(movie)">
            <div class="form-group row">
                <label for="title" class="col-4 col-form-label">Title</label>
                <div class="col-8">
                    <input v-model="movie.title" id="title" name="title" placeholder="add movie title" type="text" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="director" class="col-4 col-form-label">director</label>
                <div class="col-8">
                    <input v-model="movie.director" id="director" name="director" placeholder="add director " type="text" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="imgUrl" class="col-4 col-form-label">img Url</label>
                <div class="col-8">
                    <input v-model="movie.imageUrl" id="imgUrl" name="imgUrl" placeholder="add image url" type="text" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="duration" class="col-4 col-form-label">Duration</label>
                <div class="col-8">
                    <input v-model="movie.duration" id="duration" name="duration" type="number" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">movie release date</label>
                <div class="col-8">
                    <input v-model="movie.releaseDate" id="text" name="text" placeholder="add release date" type="date" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="genre" class="col-4 col-form-label">Genre</label>
                <div class="col-8">
                    <input v-model="movie.genre" id="genre" name="genre" placeholder="add movie genre" type="text" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button name="submit" type="submit"  class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>


    </div>
</template>

<script>

    import {filmServices} from "../services/MoviesServices";

    export default {
        name: "AddMovie",

        data(){

            return {

                movie:{
                    title: "",
                    director: "",
                    imageUrl: "",
                    duration: "",
                    releaseDate: "",
                    genre:"",

                }

            }


        },

        methods: {
            addMovie(movie){

                filmServices.add(movie)
                    .then(() =>{

               this.$router.push('movies')

                    })
                    .catch((error) => {

                        console.log(error)

                    })


            }


        }

    }
</script>

<style scoped>

</style>