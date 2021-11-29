export const basket = {

    namespaced: true,

    state(){
        return {
            basketCount: 1
        }
    },
    getters: {
        getBasketCount(state) {
            return state.basketCount
        }
    },

    mutations: {},
    actions: {}
}