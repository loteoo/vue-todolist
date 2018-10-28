<template>
  <div class="todo-list">
    <h3>To-do items</h3>
    <form class="new-item-form" v-on:submit.prevent="addItem" method="post">
      <input type="text" placeholder="Type something here..." v-model="inputValue" required />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>
    </form>
    <h4>{{items.length}} items</h4>
    <ul class="list">
      <li class="item" v-for="(item, index) in items" :key="index">

        <form v-if="item.editing" class="inner" method="post" v-on:submit.prevent="toggleItemEditing(item)">
          <input type="text" v-model="items[index].title" required />
          <button class="confirm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </button>
        </form>

        <div v-else v-bind:class="{inner: true, done: item.done}">
          <button class="check" v-on:click="toggleItemStatus(item)">
            <svg v-if="item.done" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
          </button>
          <div class="name" v-on:click="toggleItemEditing(item)">
            <strike v-if="item.done">{{item.title}}</strike>
            <span v-else>{{item.title}}</span>
          </div>
          <button class="delete" v-on:click="deleteItem(item)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </li>
    </ul>
    <div class="info">
      <span>Click to edit.</span>
      <a v-on:click="clearCheckedItems">Clear checked items</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  data: () => ({
    inputValue: '',
    items: []
  }),
  methods: {
    addItem() {
      this.items = this.items.concat({
        title: this.inputValue,
        done: false,
        editing: false
      })
      this.inputValue = ''
    },
    toggleItemStatus(item) {
      item.done = !item.done
    },
    toggleItemEditing(itemToToggle) {
      this.items = this.items.map(item =>
        item === itemToToggle
          ? ({...item, editing: !item.editing})
          : ({...item, editing: false})
      )
    },
    deleteItem(itemToDelete) {
      this.items = this.items.filter(item => item !== itemToDelete)
    },
    clearCheckedItems() {
      this.items = this.items.filter(item => !item.done)
    },
  }
}

</script>

<style scoped>

.todo-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #212121;
  min-height: 320px;
}

.info {
  padding: 1rem;
  margin: auto 0 0 0;
  font-size: 0.67rem;
  opacity: 0.67;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.new-item-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.inner.done {
  opacity: 0.5;
}

.name {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
  cursor: text;
}

</style>
