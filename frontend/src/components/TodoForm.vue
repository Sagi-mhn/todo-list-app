<template>
    <div class="todoform">
        <h1>This page is dedicated to add todos in your list.</h1>

        <div>You currently have {{ allTodos.length }} tasks.</div>
        <div v-for="todo in allTodos" :key="todo.id" classe="vfortodo">
        </div>
        <input 
      :value="newTask" 
      @input="updateTask"
      @keydown.enter="addTodo()"
      placeholder="Write a new todo here"/>
      <button @click="addTodo()">&leftarrow;Add Todo</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapGetters, mapActions, mapState } from 'vuex';

export default defineComponent({
  
  computed: {
    ...mapGetters(['allTodos']),
    ...mapState(['newTask']),

  },
  methods: {
    ...mapActions(['addTodo', 'setNewTask']),
    updateTask(event: Event) {
      const input = event.target as HTMLInputElement;
      this.setNewTask(input.value); // Met à jour le store avec la saisie
    },
   
  },
});

</script>

<style>
input {
  margin-top: 10px;
  padding: 5px;
  width: 60%;
}
button {
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background-color: #4dbb8a;
  }

}

</style>