<template>
    <header>
        <div class="banner coffepage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBar />
                    </div>
                </div>
                <h1 class="title-big">Our Coffee</h1>
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