<template>
  <div id="app">
    <!-- Navbar -->
    <router-link to="/" class="home-link">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet">
      <i class="em em-house" aria-role="presentation" aria-label="HOUSE BUILDING"></i>
      </router-link>
      <nav>
        <router-link to="/todolist" class="nav-link">Todo list</router-link> |
        <router-link to="/todoform" class="nav-link">Todo form</router-link> |
        <router-link to="/about" class="nav-link">About us</router-link>
    </nav>
    
    <!-- Affichage de la vue selon le routeur -->
    <router-view/>
  </div>
  <br>
  <footer>
    <p>&#169;Copyright 2025 MAHAN</p>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Style de la barre de navigation */
nav {
  padding: 20px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
}
.home-link{
  font-weight: bold;
  background-color: #2c3e50;
  text-decoration: none;
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 4px;
  &:hover {
    background-color: #42b983;
  }
}
/* Style des liens de la navbar */
.nav-link {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 5px;

  /* Changer la couleur au survol */
  &:hover {
    background-color: #42b983;
  }

  /* Styles pour le lien actif (lorsque la route est exactement active) */
  &.router-link-exact-active {
    color: #42b983;
    border-bottom: 2px solid #42b983;
  }
}
  footer {
    font-size: 60%;
  border: solid 0.5px;
  width: 40%;
  margin-left: 30%;
  }
</style>
