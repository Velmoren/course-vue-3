<template>
    <header>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <NavBar :classLink="'header__item'" :classNavBar="'header'">
                            <template v-slot:logo>
                                <img src="@/assets/logo/Logo.svg" alt="logo">
                            </template>
                        </NavBar>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <h1 class="title-big">Everything You Love About Coffee</h1>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <a href="./coffeepage.html" class="preview__btn">More</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    components: { NavBar }
}
</script>