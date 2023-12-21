import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 0,
        isAuth: false
    },
    getters: {
//        computed properties
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
//        изменение состояния state
        incrementLikes(state) {
            state.likes++
        },
        decrementLikes(state) {
            state.likes--
        }
    },
    actions: {
//        функции, которые внутри себя используют мутации
    },
    modules: {
//        изолированное состояние
    }
});