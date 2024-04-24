<template>
    <div :class="typeClass">
        <img src="@/assets/img/coffee-1.jpg" alt="coffee">
        <div class="best__item-title">{{ name }}</div>
        <div class="best__item-price">{{ price }}$</div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number || String
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        url: {
            type: String 
        },
        typeClass: {
            type: String,
            required: true
        }
    }
}
</script>