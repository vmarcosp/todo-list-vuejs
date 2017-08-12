<template>
    <div class="container">
        <input class="select-all" type="checkbox">
        <input v-model="taskLabel" v-on:keyup.enter="createNewTask" class="input-task" placeholder="What needs to be done ?" type="text">
    </div>
</template>


<script>
export default {
    name: 'input-task',
    data() {
        return {
            taskLabel: ''
        };
    },
    methods: {
        createNewTask() {
            this.$emit('createdNewTask', this.taskLabel);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~@scss/_variables';

.container {
    background: white;
    padding: {
        top: .4rem;
        bottom: .4rem;
        right: 1rem;
        left: 1rem;
    }
    >.select-all {
        outline: none;
        -webkit-appearance: none;
        transform: rotate(90deg);
        &:before {
            content: '❯';
            color: $gray-semi-dark;
            font-size: 22px;
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
