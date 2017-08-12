<template>
    <ul>
        <li v-bind:class="{'checked':task.completed}" v-for="(task,index) in tasks" :key="index">
            <input v-model="task.completed" type="checkbox">
            <label>{{task.label}}</label>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'task-list',
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss">
@import '~@scss/_variables';

ul {
    list-style: none;
    border-top: solid .5px $gray-light;
    >li {
        border-top: solid .5px $gray-light;
        background: white;
        display: flex;
        align-items: center;
        padding: .5rem;
        &.checked {
            >input {
                &:after {
                    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')
                }
            }
            >label {
                color: $gray-light;
                text-decoration: line-through;
                font-style: italic;
            }
        }
        >label {
            font-size: 22px;
            padding-left: .6rem;
        }
        >input {
            cursor: pointer;
            outline: none;
            -webkit-appearance: none;
            &:after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>')
            }
        }
    }
}
</style>
