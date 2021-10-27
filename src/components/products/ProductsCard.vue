<template>
    <div>
        <h1>Номер товара: {{ productId }}</h1>
    </div>
</template>

<script>
export default {
    data() {
         return {}
    },
    computed: {
        productId() {
            return +this.$route.params.id;
        }
    }
}
</script>

<style>

</style>