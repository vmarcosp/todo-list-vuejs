<template>
  <div class="todo-list-container">
    <logo></logo>
    <div>
      <input-task></input-task>
      <task-list></task-list>
    </div>
  </div>
</template>

<script>
import Logo from './Logo';
import InputTask from './InputTask';
import TaskList from './TaskList';

export default {
  name: 'todo-list',
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
}
</style>
