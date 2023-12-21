import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({
    modules: {
//        изолированное состояние
        post: postModule
    }
});