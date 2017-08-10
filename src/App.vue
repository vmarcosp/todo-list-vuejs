<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList
  }
};
</script>

<style lang="scss">
@import '~@scss/_variables';
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

* {
  font-family: 'Ubuntu', sans-serif;
}

body,
html,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}

body {
  background: $background;
}
</style>
