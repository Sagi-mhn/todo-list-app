<template>
  <div class="home">
    <h1>Welcome to Your Todo-List app in Vue.js + TypeScript</h1>
    <p>
      To get in, click on the "Todo list" button above &uparrow;
    </p>
  </div>
  
</template>
"Welcome to Your Todo List app in Vue.js + TypeScript"
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  
  },
});
</script>

<style>
* {
  background-color: rgb(245, 218, 218);
}

h1 {
  text-align: center;
  font-size: 100%;
  font-weight:bold;
  
}
</style>
