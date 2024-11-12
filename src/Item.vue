<template>
    <li>
        <slot name="first"></slot>
        {{ text }}
        <slot name="second"></slot>
    </li>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>