<template>
<div>
  <div class="sep"><h1>Elements</h1></div>
    <button-submit><p>Submit</p></button-submit>
         <br>
    <alert-modal />
         <br>
    <input-text />
</div>
</template>

<script>
import buttonSubmit from '../elements/buttonSubmit.vue';
import alertModal from '../elements/alertModal.vue';
import inputText from '../elements/inputText.vue';

export default {
   name: 'Home',
    components: {
    buttonSubmit,
    alertModal,
    inputText
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
.sep {
  margin: 10px 0;
  text-align: center;
}
</style>