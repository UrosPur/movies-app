<template>
    <div>
        <b-form-input
                type="text"
                placeholder="Search movies"
                @input="emitInputChangeEvent"
        >

        </b-form-input>

    </div>
</template>

<script>
    export default {
        name: "MovieSearch",

        methods: {

            emitInputChangeEvent(term){

                this.$emit('search-term-change', term)
            }

        }


    }
</script>

<style scoped>

</style>



<!--<template>-->
    <!--<div>-->
        <!--<b-input-->
                <!--class="mb-2 mr-sm-2 mb-sm-0"-->
                <!--placeholder="Search Movies"-->
                <!--@input="emitInputChangeEvent"-->
        <!--/>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: 'MovieSearch',-->
        <!--methods: {-->
            <!--emitInputChangeEvent(term) {-->
                <!--this.$emit('search-term-change', term)-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
