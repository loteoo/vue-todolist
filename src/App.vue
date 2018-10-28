<template>
  <div class="container">
    <div class="card">
      <div class="left">
        <h1>Vue.js test app</h1>
        <p>
          <a href="https://github.com/loteoo/vue-todolist" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Source code
          </a>
        </p>
        <p>
          <router-link to="/todo-offline">Offline todolist</router-link>
          <router-link to="/todo-rest">REST todolist</router-link>
          <router-link to="/counter">Simple counter</router-link>
        </p>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/* Sane css reset */
@import '~sanitize.css';

/*------------------------------------*\
    Global css
\*------------------------------------*/

html {
	--text-color: #FFFFFF;
	--background-color: #323232;
	--accent-color: #06D19C;
  width: 100%;
  height: 100%;
  font-family: 'CircularStd', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: var(--text-color);
  background-color: var(--background-color);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}
body {
  position: relative;
  overflow-x: hidden;
}


.container {
  min-height: calc(100vh - 3rem);
  padding: 15vh 1rem;
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    padding: 0;
  }
}


a {
  color: inherit;
  cursor: pointer;
  text-decoration: underline;
}
a:hover {
  color: var(--accent-color);
}

button, input, select, textarea {
  background-color: transparent;
  border: none;
  color: inherit;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: rgba(255,255,255,0.1);
  border-radius: 3rem;
}
input[type="text"]:hover {
  background-color: rgba(255,255,255,0.15);
}
input[type="text"]:focus {
  outline: none;
}

button {
  cursor: pointer;
  padding: 0.5rem;
}
button:hover {
  color: var(--accent-color)
}
button:focus {
  outline: none;
}

img {
  max-width: 100%;
}

svg {
  fill: none;
}

::selection {
	background: var(--accent-color);
	color: var(--background-color);
}




/*------------------------------------*\
    Card layout
\*------------------------------------*/

.card {
  padding: 1rem;
  background-color: #1A1A1A;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  min-height: 420px;
}
.left {
  width: 50%;
  padding: 1rem;
  text-align: center;
}
.right {
  width: 50%;
}
@media (max-width: 768px) {
  .card {
    border-radius: 0;
    flex-direction: column;
  }
  .left,
  .right {
    width: 100%;
  }
}

</style>
