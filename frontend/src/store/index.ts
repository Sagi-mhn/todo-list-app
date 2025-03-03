import { createStore } from 'vuex';


export default createStore({
  state: {
    todos: [
      {
        id: 0,
        text: 'First todo',
        createdAt: new Date(),
        completed: false,
      },
      {
        id: 1,
        text: 'Second todo',
        createdAt: new Date(),
        completed: false,
      },
    ],
    nextTodoId: 2,
    newText: '', // Champ lié à l'input
  },

  getters: {
    allTodos(state) {
      return state.todos;
    },
    todoById: (state) => (id:any) => {
      return state.todos.find(todo => todo.id === id);
    },
  },

  mutations: {
    SET_NEW_TASK(state, text: string) {
      state.newText = text; // Met à jour le texte entré
    },

    ADD_TODO(state) {
      const text = state.newText.trim();

      if (text === '') {
        alert("Please write a todo.");
        return;
      }

      const newTodo = {
        id: state.nextTodoId,
        text,
        createdAt: new Date(),
        completed: false,
      };

      state.todos.push(newTodo); // Ajoute en fin de tableau
      state.newText = '';        // Vide le champ de saisie
      state.nextTodoId++;        // Incrémente l'ID
      alert("Todo added");
    },
    MARK_AS_DONE(state, id) {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = true;
      }
    },
    MARK_AS_UNDONE(state, id) {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = false;
      }
    },
    REMOVE_TODO(state, id) {
      if (!confirm("Are you sure to remove this todo ?")) {
        return;
      }
      const index = state.todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    state.todos.splice(index, 1); // Supprime le bon élément
    alert("Todo removed");
  } else {
    alert("Todo not found");
  }
    },
    MODIF_TODO(state, id,) {
      const todo = state.todos.find(todo => todo.id === id);
      if (!todo) {
        alert("Todo not found");
        return;
      }
      const modifText = prompt(
        "Enter the new task for the todo:",
        todo.text
      );
      if (modifText !== null && modifText.trim() !== "") {
        todo.text = modifText.trim();
        todo.createdAt = new Date();
        todo.completed = false;
      }

    }
  },

  actions: {
    addTodo({ commit }) {
      commit('ADD_TODO');
    },
    setNewTask({ commit }, text: string) {
      commit('SET_NEW_TASK', text);
    },
    markAsDone({ commit }, id) {
      commit('MARK_AS_DONE', id);
    },
    markAsUndone({ commit }, id) {
      commit('MARK_AS_UNDONE', id);
    },
    modifTodo({ commit }, id,) {
      commit('MODIF_TODO', id);
    },
    removeTodo({ commit }, id) {
      commit('REMOVE_TODO', id);
    },
  },
});
