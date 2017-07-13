<template>
  <section id="app" class="hero is-dark is-fullheight">
  
    <section class="hero-head">
      <navbar></navbar>
    </section>
  
    <section class="app-body">
      <div class="column">
        <div class="column is-12" style="border:solid 1px red">
            <input-task @receiveNewTask="addNewTask"></input-task>
        </div>
        <div class="column is-12" style="border:solid 1px red">
          <div class="">
            <task-list :taskList="tasks"></task-list>
          </div>
        </div>
      </div>
  
    </section>
  
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

.app-body {
  display: flex;
  flex-grow: 1;
  padding: 1rem;
}

body {
  background: $background;
}

@import "~bulma";
</style>
