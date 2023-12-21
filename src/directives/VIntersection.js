export default {
    mounted(el, binding) {
        console.log('el', el);
        console.log('binding', binding);
        
//    начинаем следить, долистал ли пользователь до конца
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if (
              entries[0].isIntersecting
//              && this.page < this.totalPages
          ) {
                    binding.value()
                }
            };

        const observer = new IntersectionObserver(callback, options);
        //    this.$refs получает dom элемент
        observer.observe(el);
    },
    name: 'intersection'
}