<template>
  <div class="todolist">
        <h2>THIS IS YOUR LIST OF TODO :</h2>

  <div v-for="todo in allTodos" :key="todo.id" classe="vfortodo">
    <div class="tododone" :class="{ completed: todo.completed }">
      <!-- <div>id : {{ todo.id }}</div> -->
      <div class="task">{{ todo.text }}</div>
      <div class="time">({{ todo.createdAt.toLocaleDateString('fr-FR') }}
      {{ todo.createdAt.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }})</div>

      <!-- <div class="completed">Completed: {{ todo.completed }}</div> -->

      <button @click="removeTodo(todo.id)">&cross;</button>
      <button @click="modifTodo(todo.id)">modif</button>
      <button v-if="!todo.completed" @click="markAsDone(todo.id)">
        Mark as done &check;</button>
      <button v-else @click="markAsUndone(todo.id)">Mark as undone &excl;</button>
      
    </div>
    <div>______</div>
    
  </div>

  <div v-if="allTodos.length === 0">You don't have any task to do.</div>

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
import { mapGetters, mapActions, mapState } from 'vuex';

export default defineComponent({
  
  computed: {
    ...mapGetters(['allTodos']),
    ...mapState(['newTask']),

  },
  methods: {
    ...mapActions(['addTodo', 'setNewTask', 'modifTodo', 'markAsDone', 'markAsUndone', 'removeTodo']),
    updateTask(event: Event) {
      const input = event.target as HTMLInputElement;
      this.setNewTask(input.value); // Met à jour le store avec la saisie
    },
  },
});

</script>



<style>
* {
  background-color: rgb(245, 218, 218);
}

h2 {
  text-align: center;
  /* text-decoration: underline; */
  font-size: 135%;
  border: 1.5px solid #2c3e50;  
}

.completed {
  color: green;
  text-decoration: line-through 0.8px;
}

.vfortodo {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.task {
  background-color: #2c3e50;;
  color: aliceblue;
  width: 50%;
  margin-left: 25%;  /* Décale vers la droite */
  margin-top: 4%;  /* Décale vers la droite */
  font-size: 120%;
  border-radius: 6px;
   
}
.time {
  font-size: small;
}

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