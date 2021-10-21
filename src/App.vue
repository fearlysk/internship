<template>
  <div>
     <Header />
     <router-view />
  </div>
</template>

<script>
import Header from '../src/components/header/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">

</style>