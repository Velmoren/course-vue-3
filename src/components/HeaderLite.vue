<template>
    <header>
        <div :class="[bannerClass, 'banner']">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBar :classLink="'header__item'" :classNavBar="'header'">
                            <template v-slot:logo>
                                <img src="@/assets/logo/Logo.svg" alt="logo">
                            </template>
                        </NavBar>
                    </div>
                </div>
                <h1 class="title-big">{{ title }}</h1>
            </div>
        </div>
    </header>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    components: { NavBar },
    props: {
        bannerClass: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>