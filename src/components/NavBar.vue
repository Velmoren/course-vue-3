<template>
    <nav>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <RouterLink :to="links[0].link">
                    <img src="@/assets/logo/Logo.svg" alt="logo">
                </RouterLink>
            </li>
            <li class="header__item">
                <RouterLink :to="links[1].link">{{ links[1].text }}</RouterLink>
            </li>
            <li class="header__item">
                <RouterLink :to="links[2].link">{{ links[2].text }}</RouterLink>
            </li>
            <li class="header__item">
                <RouterLink :to="links[3].link">{{ links[3].text }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: 0, link: '/', text: '' },
                { id: 1, link: '/our-coffee', text: 'Our coffee' },
                { id: 2, link: '/pleasure', text: 'For your pleasure' },
                { id: 3, link: '/contacts', text: 'Contact us' },
            ]
        }
    }
}
</script>