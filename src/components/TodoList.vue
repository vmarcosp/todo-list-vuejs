<template>
  <div class="todo-list-container">
    <logo></logo>
    <div class="container-tasks">
      <input-task @createdNewTask="addNewTask"></input-task>
      <task-list :tasks="tasks"></task-list>
    </div>
  </div>
</template>

<script>
import Logo from './Logo';
import InputTask from './InputTask';
import TaskList from './TaskList';

export default {
  name: 'todo-list',
  methods: {
    addNewTask(labelTask) {
      let newTask = { label: labelTask, completed: false };
      console.log(labelTask);
      this.tasks.push(newTask);
    }
  },
  data() {
    return {
      tasks: []
    };
  },
  components: {
    Logo,
    InputTask,
    TaskList
  }
};
</script>

<style lang="scss" scoped>
.todo-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-flow: column wrap;
  border: solid 1px red;
  >.container-tasks {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
