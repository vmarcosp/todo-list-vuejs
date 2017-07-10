<template>
    <div>
        <input v-on:keyup.enter="addTask" class="new-todo" placeholder="O que precisa ser feito?">
    </div>
</template>

<script>
import Task from '../models/Task';

export default {
    methods: {
        addTask($event) {
            let value = $event.target.value;
            let task = this.createTask(value);
            this.broadcastOfNewTask(task);
            this.clearInput();
        },
        createTask(value) {
            return new Task(value);
        },
        broadcastOfNewTask(task) {
            this.$emit('receiveNewTask', task);
        },
        clearInput() {
            this.$el.querySelector('input').value = '';
        }
    }
};
</script>

<style lang="sass">
</style>
