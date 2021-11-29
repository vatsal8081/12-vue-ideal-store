<template>

    <h2>user</h2>
    <p> user logedIn: {{ getUserLogedIn }} </p>
    <button @click="changeUserLogedIn"> change </button>

    <p> basket count is: {{ getBasketCount }} </p>


</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

    computed: {
        ...mapGetters('user', ['getUserLogedIn']),
        ...mapGetters('basket', ['getBasketCount'])
        
        
    },
    methods: {
        ...mapActions('user', ['changeUserLogedIn'])
    }

}
</script>

<style>

</style>