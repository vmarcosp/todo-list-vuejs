<template>
  <div class="todo-list-container">
    <logo></logo>
    <!--input  -->
    <!-- tasklist  -->
  </div>
</template>

<script>
import Logo from './Logo';

export default {
  name: 'todo-list',
  components: {
    Logo
  }
};
</script>

<style scoped>
.todo-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  flex-flow: column wrap;
}
</style>
