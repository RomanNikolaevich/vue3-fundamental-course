<template>
    <form @submit.prevent>
        <!--            @submit.prevent - отключает действия браузера по умолчанию-->
        <h4>Создание поста </h4>
        <!--           v-model заменяет v-bind и слушатель событий-->
        <my-input
                v-model="post.title"
                type="text"
                placeholder="Название"/>
        <my-input v-model="post.body"
               type="text"
               placeholder="Описание"/>
        <my-button
                style="align-self: flex-end; margin-top: 15px"
                @click="createPost">
            Создать
        </my-button>
    </form>
</template>

<script>

// import MyInput from "@/components/UI/Myinput.vue";

export default {
    // components: {MyInput},
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            };
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>