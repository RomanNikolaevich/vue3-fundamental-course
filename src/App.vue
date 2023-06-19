<template>
    <div class="app">
        <form @submit.prevent>
<!--            @submit.prevent - отключает действия браузера по умолчанию-->
            <h4>Создание поста </h4>
            <!--            v-bind - связывает данные с конкретным компонентом-->
            <input v-bind:value="title"
                   @input="title = $event.target.value"
                   class="input"
                   type="text"
                   placeholder="Название">
            <input v-bind:value="body"
                   @input="body = $event.target.value"
                   class="input"
                   type="text"
                   placeholder="Описание">
            <button class="btn"
                    @click="createPost"
                    type="submit">
                Создать
            </button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название: </strong> {{ post.title }}</div>
            <div><strong>Описание: </strong> {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'Javascript 1', body: 'Описание поста 1'},
                {id: 2, title: 'Javascript 2', body: 'Описание поста 2'},
                {id: 3, title: 'Javascript 3', body: 'Описание поста 3'},
                {id: 4, title: 'Javascript 4', body: 'Описание поста 4'},
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            // отправляем данные в массив "posts" и очищаем поля input от введенных данных:
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
        },

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

.post {
    padding: 15px;
    border: 1px solid teal;
    margin-top: 15px;
}

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

.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;

}
</style>