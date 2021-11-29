import { createStore } from 'vuex';
import { common } from './modules/common';
import { user } from './modules/user';
import {cart} from './modules/cart';
import { basket } from './modules/cart/basket';

const store = createStore({

    
    modules: {
        common,
        user,
        cart,
        basket
    },

    state(){
        return {};
    },

    getters: {},
    mutations: {},
    actions: {},
    
})

export default store