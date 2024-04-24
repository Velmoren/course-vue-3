<template>
    <li :class="{active: done}">{{ text }}</li>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        done: {
            default: false
        }
    }
}
</script>

<style scoped>
li.active {
    color: red;
}
</style>