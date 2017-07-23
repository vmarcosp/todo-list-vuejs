<template>
    <section class="hero is-light is-fullheight">
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </section>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import './assets/scss/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

* {
    font-family: 'Ubuntu', sans-serif;
}

.app-body {
    display: flex;
    flex-grow: 1;
    padding: 1rem;
}

@import "~bulma";
</style>
