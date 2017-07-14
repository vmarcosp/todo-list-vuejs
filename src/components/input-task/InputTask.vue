<template>
    <input-field :label="'O que precisa ser feito?'" @enterClick="addTask"></input-field>
</template>

<script>
    import Task from '../../models/Task';
    import InputField from '../input-field/InputField';
    
    export default {
        components: {
            InputField
        },
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

<style lang="scss">
    
</style>
