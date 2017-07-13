<template>
    <header class="nav task-nav">
        <img src="../assets/imgs/logo.svg">
        <span>Task manager</span>
    </header>
</template>
<script>

export default {
    name: 'navbar'
};

</script>
<style lang="scss" scoped>
.task-nav {
    padding:2.5rem;
    justify-content: center;
    align-items:center;
    >img {
        width:2.2rem;
    }
    >span {
        padding-left:1rem;
        font-size: 2.2rem;
    }
}
</style>
