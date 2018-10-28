<template>
  <div class="fetch-list">
    <h3>To-do items</h3>
    <h4>{{items.length}} items</h4>
    <ul class="list">
      <li class="item" v-for="item in items" :key="item.id">
        <div class="inner">
          <button class="check">
            <svg v-if="item.completed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
          </button>
          <div class="name">
            <strike v-if="item.completed">{{item.title}}</strike>
            <span v-else>{{item.title}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FetchList',
  data: () => ({
    items: [],
    loaded: false
  }),
  mounted() {
    if (!this.loaded) {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(response => response.json())
        .then(data => {
          this.items = data
          this.loaded = true
        })
    }
  }
}
</script>

<style scoped>

.fetch-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #212121;
  min-height: 320px;
}




h4 {
  padding: 0 0.5rem;
}

.list {
  list-style: none;
  padding: 0;
  margin-top: 0;
}

.item {
  overflow: hidden;
  border-radius: 3rem;
}
.item:hover {
  background-color: rgba(255,255,255,0.05);
}

.inner {
  display: flex;
  align-items: stretch;
}


.name {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
  cursor: text;
}

</style>
