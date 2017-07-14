<template>
  <section id="app" class="hero is-light is-fullheight">
    <section class="app-body">
      <div class="column card is-offset-one-quarter is-half">
        <div class="column">
          <logo></logo>
        </div>
        <div class="column">
              <input-task @receiveNewTask="addNewTask"></input-task>
        </div>
        <div class="column">
            <task-list :taskList="tasks"></task-list>
        </div>
      </div>
  
    </section>
  
  </section>
</template>

<script>
import InputTask from './components/input-task/InputTask';
import TaskList from './components/task-list/TaskList';
import Logo from './components/logo/Logo';

export default {
  name: 'app',
  data() {
    return { tasks: [] };
  },
  components: {
    InputTask,
    TaskList,
    Logo
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
