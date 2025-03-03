<template>
  <div class="todolist">
    <h2>THIS IS YOUR LIST OF TODO :</h2>

    <!-- Boutons de filtre -->
     <div class =filtre>Filtre :
    <button @click="resetFilter">All</button>
    <button @click="filterByTrue">Done</button>
    <button @click="filterByFalse">Undone</button>
    </div>

    <div v-for="todo in filteredTodos" :key="todo.id" class="vfortodo">
      <div class="tododone" :class="{ completed: todo.completed }">
        <div class="task">{{ todo.text }}</div>
        <div class="time">({{ todo.createdAt.toLocaleDateString('fr-FR') }}
        {{ todo.createdAt.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }})</div>
        <button @click="removeTodo(todo.id)">&cross;</button>
        <button @click="modifTodo(todo.id)">Modif</button>
        <button v-if="!todo.completed" @click="markAsDone(todo.id)">
          Mark as done &check;</button>
        <button v-else @click="markAsUndone(todo.id)">Mark as undone &excl;</button>
      </div>
      <div>______</div>
    </div>

    <div v-if="filteredTodos.length === 0"><br>You don't have any task to do.</div>

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
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export default defineComponent({
  data() {
    return {
      filter: '' // État local pour le filtre
    };
  },
  computed: {
    ...mapGetters(['allTodos']),
    ...mapState(['newTask']),
    filteredTodos(): Todo[] {
      if (this.filter === 'true') {
        return this.allTodos.filter((todo: Todo) => todo.completed);
      } else if (this.filter === 'false') {
        return this.allTodos.filter((todo: Todo) => !todo.completed);
      } else {
        return this.allTodos;
      }
    }
  },
  methods: {
    ...mapActions(['addTodo', 'setNewTask', 'modifTodo', 'markAsDone', 'markAsUndone', 'removeTodo']),
    updateTask(event: Event) {
      const input = event.target as HTMLInputElement;
      this.setNewTask(input.value); // Met à jour le store avec la saisie
    },
    filterByTrue() {
      this.filter = 'true';
    },
    filterByFalse() {
      this.filter = 'false';
    },
    resetFilter() {
      this.filter = '';
    }
  }
});
</script>

<style>
* {
  background-color: rgb(245, 218, 218);
}

.filtre {
  background-color: #2c3e50;
  color : aliceblue;
  margin-right: 5%;
}

h2 {
  text-align: center;
  font-size: 135%;
  border: 1.5px solid #2c3e50;  
}

.completed {
  color: green;
  text-decoration: line-through 0.8px black;
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
  margin-left: 25%;  /* Décale vers la droite pour aligner*/
  margin-top: 4%; 
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
