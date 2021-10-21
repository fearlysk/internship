<template>
  <div class="alert_modal">
    <div><h3>Important message</h3></div>
    <div class="alert_modal_btns">
        <div @click="cancel()" class="cancel_btn">Отменить</div>
        <div @click="accept()" class="accept_btn">Принять</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'alertModal',
    methods: {
        cancel() {
            alert("Cancelled");
        },
        accept() {
            alert("Accept");
        }
    }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'alertModal.scss';
</style>