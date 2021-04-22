<template>
  <div class="LogViewer">
     <h3>{{ logs.length }} </h3>
    <ul>
      <li v-for="(log, index) in logs" :key="index">{{index}} - {{log}}</li>
    </ul>
    <h3>Filters</h3>
    <h3>Date Range</h3>
    <h3>Custom Search</h3>
  </div>
</template>

<script>
export default {
  name: 'LogViewer',
  props: {
     logs: {
        type: Array,
        required: true
     }
  }
}
</script>

<style scoped>

</style>
