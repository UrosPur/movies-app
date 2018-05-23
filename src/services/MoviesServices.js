import axios from 'axios'

export default class MoviesServices{

    constructor(){

        axios.defaults.baseURL='http://localhost:8000/api/'

    }

    getAll() {

        return axios.get('movies');
    }

    get(id) {

        return axios.get(`movies/${id}`)

    }

    add(value){

        return axios.post('movies',value)
    }

    edit (post) {
        // console.log(post)
        return axios.put(`movies/${post.id}`, post)
    }

    remove (id) {
        return axios.delete(`movies/${id}`)
    }


}

export const filmServices = new MoviesServices()