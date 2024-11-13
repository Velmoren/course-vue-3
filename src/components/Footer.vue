<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <NavBar :classLink="'footer__item'" :classNavBar="'footer'">
                        <template v-slot:logo>
                            <img src="@/assets/logo/Logo_black.svg" alt="logo">
                        </template>
                    </NavBar>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'

    export default {
        components: {NavBar}
    }
</script>