<template>
  <!-- 19 -->
  <!-- we just saw that how we can use state but that was code for managing just one state value  we have state, getters, mutations, actions just for one state which is still bear minimum still it is taking to much space so in real world we will have lots of state there methods and lots of code so don't you think if we can devide our state code base on mudule ex if we can create diffrent file for user related store diffrent for counter related store etc-->
  <!-- vuex provide a way to do that with mudules a module is natthing but a saprate state, mutation, getter and actions for related things -->
  <!-- but as we discuss before we will only have one store in our entire app and thats true so to create one store we have to merge all over mudules in one main store  -->
  <!-- in create store we have modules key which is an object which take name of a module by you want to call it in our entire app as key and value as object contaning state, mutation, action, getters from other module  -->
  <!-- at end  all those diffrent stores will merge to gatther in one globle state by mudules also ther will be some common funcnality which we want in our entire app that will be in global store -->
  <!-- check user example in main.js -->
    

    <!-- 22 -->
    <!-- now we can use all getters and actions and all stuff from user module just we use other because at end it will be merged in our main store -->
    <p> user is LogedIn: {{ getIsLogedIn }} </p>
    <button @click="chnageIsLogedIn" >   {{ getIsLogedIn ? 'Logout' : 'login' }}  </button>

</template>

<script>

import {  mapGetters, mapActions } from 'vuex';

export default {

    // 23 but by giving namespacesd: true our getters and actions etc will not work hear because without namespaced: true they was merged and become part if main store so they was accessable hear by just name but because we give them namespaced: true they are saprate mudules so we need to tell vuex in which module you should go to find this getters and actions

    // we can do it by giving first argument to map helper functions module name and seccond as [] or {} of getters, actions etc

    // but where to find module name? you can use module name which you use to give mudules to main store configration hear its 
    // modules: {
    //     userModule
    // }, 
    // so we are using userModule but if it was user: userModule we use user hear 

    // many times we also want to use diffrent states and etc from diffrent store modules so we can use map helpers as many times as we want hear with diffrent modules names 

    computed: {
        // ...mapGetters(['getIsLogedIn'])
        ...mapGetters('userModule', ['getIsLogedIn'])
    },

    methods: {
        // ...mapActions(['chnageIsLogedIn'])
        ...mapActions('userModule', ['chnageIsLogedIn'])
    }

}
</script>

<style>

</style>