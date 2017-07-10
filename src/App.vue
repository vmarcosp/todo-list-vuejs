<template>
  <section id="app" class="hero is-dark is-fullheight">
    <section class="hero-head">
      <navbar></navbar>
    </section>
    <section class="app-body">
          <input-task @receiveNewTask="addNewTask"></input-task>
          <task-list :taskList="tasks"></task-list>
    </section>
    <section class="hero-foot">footer..</section>
  </section>
</template>

<script>
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';

export default {
  name: 'app',
  data() {
    return { tasks: [] };
  },
  components: {
    InputTask,
    TaskList,
    Navbar
  },
  methods: {
    addNewTask(task) {
      this.tasks.push(task);
    }
  }
};
</script>

<style lang="scss">
@import './assets/scss/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
* {
  font-family: 'Ubuntu', sans-serif;
}
.app-body{
  display:flex;
  flex-grow:1;
  padding:1rem;
}
body {
  background: $background;
}

@import "~bulma";
</style>
