<template>
  <Task />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from './components/Task.vue';


export default defineComponent({
  name: 'App',
  components: {
    Task
  }
});
</script>

<style lang="scss">

</style>
