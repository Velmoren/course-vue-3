<template>
    <nav>
        <ul class="d-flex justify-content-center justify-content-md-start flex-wrap" :class="classNavBar">
            <nav-item
                v-for="link in links"
                :link="link.link"
                :text="link.text"
                :classLink="classLink"
                :key="link.id"
            >
                <slot name="logo" v-if="link.id === 0"></slot>
            </nav-item>
        </ul>
    </nav>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
    components: {NavItem},
    data() {
        return {
            links: [
                { id: 0, link: '/', text: '' },
                { id: 1, link: '/our-coffee', text: 'Our coffee' },
                { id: 2, link: '/pleasure', text: 'For your pleasure' },
                { id: 3, link: '/contacts', text: 'Contact us' },
            ]
        }
    },
    props: {
        classNavBar: {
            require: true,
            type: String
        },
        classLink: {
            require: true,
            type: String
        }
    }
}
</script>