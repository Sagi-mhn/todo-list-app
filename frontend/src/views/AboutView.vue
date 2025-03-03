<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Thanks for visiting this Todo-List app.<br> Hope you enjoyed it :) <br>
    To get more, here is some views of the current tasks inside the Todo-list :</p>
  </div><div v-for="todo in allTodos" :key="todo.id">
    <div :class="{ aboutCompleted: todo.completed }">
      <div>Todo ID : {{ todo.id }}</div>
      <div>Task : {{ todo.text }}</div>
      <div>Added/modified : {{ todo.createdAt.toLocaleDateString('fr-FR') }}
      at {{ todo.createdAt.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}</div>

      <div v-if="!todo.completed">Completed: <span style="color: red;"> {{ todo.completed }} </span> </div>
      <div v-if="todo.completed">Completed: <span style="color: green;"> {{ todo.completed }} </span> </div>
</div>  
    <div>______</div>
    <br>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, } from 'vuex';


export default defineComponent({
  name: 'AboutView',
  components: {
  
  },
  computed: {
    ...mapGetters(['allTodos']),

  }
});
</script>

<style>
* {
  background-color: rgb(245, 218, 218);
}

h1 {
  text-align: center;
  font-size: 160%;
  font-weight:bold;
  
}
.about {
  color: black;
}

</style>
