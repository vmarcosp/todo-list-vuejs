<template>
    <ul class="todo-list">
        <li v-for="(task,index) in taskList" :key="index" class="todo">
            <input class="toggle" :checked="task.completed" type="checkbox">
            <label @click="completeTask(task)" :class="{'completed':task.completed}">{{task.title}}</label>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            taskList: {
                type: Array,
                required: true
            }
        },
        methods: {
            completeTask(task) {
                task.completed = !task.completed;
            }
        }
    };
</script>

<style lang="scss">
    .todo-list {
        overflow: auto;
        padding: .2rem;
        height: 30rem;
        >.todo {
            display: flex;
            align-items: center;
            >label {
                cursor: pointer;
                box-sizing: border-box;
                padding-left: .5rem;
            }
            padding:.2rem;
        }
    }
    
    .toggle {
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-progress-appearance: none;
        outline: none;
        transition: 1000ms;
        &:checked::before {
            content: url('../../assets/imgs/checked.svg');
        }
        &::before {
            content: url('../../assets/imgs/no-checked.svg');
        }
        &:checked+label {
            text-decoration: line-through;
            font-style: italic;
        }
    }
</style>
