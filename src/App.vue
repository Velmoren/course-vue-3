<template>
  <MainPage />

  <FooterComponent />
</template>

<script>
import MainPage from '@/pages/MainPage.vue'
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {MainPage, FooterComponent}
}
</script>
