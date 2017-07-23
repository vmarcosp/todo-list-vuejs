<template>
    <ul class="todo-list">
        <transition-group name="fade">
            <li v-for="(task,index) in taskList" :key="index" class="todo">
                <input class="toggle" :checked="task.completed" type="checkbox">
                <label>{{task.title}}</label>
            </li>
        </transition-group>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            checkModel: false
        };
    },
    props: {
        taskList: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

.todo-list {
    overflow: auto;
    padding: .2rem;
    height: 30rem;
    .todo {
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
