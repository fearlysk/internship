<template>
  <div>
     <Header />
     <router-view />
     <Footer />
  </div>
</template>

<script>
import Header from '../src/components/header/Header.vue';
import Footer from '../src/components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>