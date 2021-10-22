<template>
    <div class="header">
        <div><h1>Game Store</h1></div>
            <div class="header_nav">
                <div class="header_nav_item">
                    <a href="/">Home</a>
                </div>
                <div class="header_nav_item">
                    <a class="header_nav_item_products" href="#">Products</a>
                </div>
                <div class="header_nav_item">
                    <a href="/about">About</a>
                </div>
                <div class="header_nav_item">
                    <a href="/signin">Sign In</a>
                </div>
                <div class="header_nav_item">
                    <a href="/signup ">Sign Up</a>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'header.scss';
</style>