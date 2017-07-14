<template>
    <div class="logo">
        <img src="../../assets/imgs/logo.svg">
        <span>TODO LIST</span>
    </div>
</template>

<script>
    export default {
        name: 'logo'
    };
</script>

<style lang="scss">
.logo{
    display: flex;
    justify-content: center;
    align-content: center;
    >img{
        width:2rem;
    }
    >span{
        text-transform: uppercase;
        padding-left:1rem;
        box-sizing: border-box;
        font-size: 1.8rem;
    }
}
</style>
