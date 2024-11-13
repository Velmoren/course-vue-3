<template>
       <li :class="classLink">
            <RouterLink :to="link">{{ text }}<slot></slot></RouterLink>
        </li>
</template>

<script>
    export default {
        props: {
            link: {
                require: true,
                type: String
            },
            text: {
                require: false,
                type: String
            },
            classLink: {
                require: true,
                type: String
            }
        }
    }
</script>