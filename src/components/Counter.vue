<template>
  <div class="counter">
    <h3>Counter</h3>
    <div class="count">
      {{count}}
    </div>
    <button v-on:click="count--">-</button>
    <button v-on:click="count++">+</button>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  data: () => ({
    count: 0
  })
}

</script>

<style scoped>

.counter {
  text-align: center;
}
.count {
  font-size: 4rem;
}
button {
  font-size: 2rem;
}

</style>
