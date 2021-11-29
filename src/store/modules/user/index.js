export const user = {
    namespaced: true,

    state(){
        return {
            userLogedIn : false
        };
    },

    getters: {
        getUserLogedIn(state){
            return state.userLogedIn
        },
    },
    mutations: {
        SET_USER_LOGED_IN(state, isLogedIn){
            state.userLogedIn = isLogedIn
        }
    },
    actions: {
        changeUserLogedIn({commit, getters}){
            commit('SET_USER_LOGED_IN', !getters.getUserLogedIn)
        }
    }
}