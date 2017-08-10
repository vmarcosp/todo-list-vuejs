<template>
  <div class="todo-list-container">
    <input>
  </div>
</template>

<script>
export default {
  name: 'todo-list'
};
</script>

<style scoped>
.todo-list-container{
  display: flex;
  justify-content: center;
  align-items: center;
  border:solid 1px red;
  flex-flow: column wrap;
}
</style>
