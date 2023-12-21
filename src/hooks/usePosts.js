import axios from "axios";
import {ref, onMounted} from "vue";

export function usePosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);
    const fetching = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
                {params: {
                    _page: 1,
                    _limit: limit
                }}
                );
            //       общее количество предоставляемых ресурсом постов отображается на вкладке Network -> Headers в браузере
            totalPages.value = Math.ceil(
                response.headers['x-total-count'] / limit
                ); // 101 post / 10 limit => 11 pages
            posts.value = response.data;
            isPostsLoading.value = false;
        } catch (e) {
            alert("Ошибка " + e);
        } finally {
            isPostsLoading.value = false;
        }
    }  

    onMounted(fetching); 

    return {
        posts,
        isPostsLoading,
        totalPages
    }
}