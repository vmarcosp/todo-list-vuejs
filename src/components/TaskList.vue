<template>
    <ul class="todo-list">
        <li v-for="(task,index) in sortedTasks" :key="index" class="todo">
            <div @click="completeTask(task)" style="cursor:pointer">
                <input class="toggle" :checked="task.completed" type="checkbox">
                <label :class="{'completed':task.completed}">{{task.title}}</label>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        taskList: { type: Array, required: true }
    },
    methods: {
        completeTask(task) {
            task.completed = !task.completed;
        }
    },
    computed: {
        sortedTasks() {
            let sorted = this.taskList;
            return sorted.sort((previous, current) => {
                if (previous.title > current.title) {
                    return 1;
                } else if (previous.title < current.title) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
    }
};
</script>

<style lang="sass">

</style>
