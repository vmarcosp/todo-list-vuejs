<template>
  <section class="app-body">
    <div class="column card is-offset-one-quarter is-half">
      <div class="column">
        <logo :title="'TODO List'"></logo>
      </div>
      <div class="column">
        <input-task @receiveNewTask="addNewTask"></input-task>
      </div>
      <div class="column">
        <task-list :taskList="tasks"></task-list>
      </div>
      <router-link class="home" to="/cep-checker">Verificar CEP</router-link>
  
    </div>
  </section>
</template>

<script>
import InputTask from '../components/input-task/InputTask';
import TaskList from '../components/task-list/TaskList';
import Logo from '../components/logo/Logo';

export default {
  name: 'home',
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
