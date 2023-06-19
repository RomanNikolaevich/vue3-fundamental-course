<template>
    <form @submit.prevent>
        <!--            @submit.prevent - отключает действия браузера по умолчанию-->
        <h4>Создание поста </h4>
        <!--           v-model заменяет v-bind и слушатель событий-->
        <input
                v-model="post.title"
                class="input"
                type="text"
                placeholder="Название">
        <input v-model="post.body"
               class="input"
               type="text"
               placeholder="Описание">
        <my-button
                class="btn"
                style="align-self: flex-end; margin-top: 15px"
                @click="createPost">
            Создать
        </my-button>
    </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton},
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

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}


</style>