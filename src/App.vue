<template>
  <RouterView name="header" />
  <RouterView />

  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer }
}
</script>
