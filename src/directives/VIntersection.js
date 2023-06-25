export default {
    mounted(el, binding) {
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback = (enries, observer) => {
            if (enries[0].isIntersecting) {
                binding.value();
            }
        }

        let observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}