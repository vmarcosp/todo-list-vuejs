<template>
    <div class="container">
        <input class="select-all" type="checkbox">
        <input class="input-task" placeholder="What needs to be done ?" type="text">
    </div>
</template>


<script>
export default {
    name: 'input-task'
};
</script>

<style lang="scss" scoped>
@import '~@scss/_variables';

.container {
    background: white;
    padding: {
        top: .6rem;
        bottom: .6rem;
        right: 2rem;
    }
    >.select-all {
        outline:none;
        -webkit-appearance: none;
        transform: rotate(90deg);
        &:before {
            content: '❯';
            color: $gray-semi-dark;
            font-size: 22px;
            padding: 10px 27px 10px 27px;
        }
    }
    >.input-task {
        outline: none;
        border: none;
        padding: 1rem;
        font-size: 1.6rem;
        &::-webkit-input-placeholder {
            color: $gray-light;
            font-style: italic;
        }
    }
}
</style>
