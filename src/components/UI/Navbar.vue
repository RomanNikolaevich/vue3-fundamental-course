<template>
    <div class="navbar">
        <div @click="$router.push('/')">
            Vue 3
        </div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button style="margin-left: 15px" @click="$router.push('/about')">About</my-button>
            <my-button style="margin-left: 15px" @click="$router.push('/store')">Store</my-button>
        </div>
    </div>
</template>

<script>

export default {
    components: {}
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: yellowgreen;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>