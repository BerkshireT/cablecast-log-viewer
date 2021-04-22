<template>
  <div class="LogViewer">
    <h3>Filters</h3>
    <h3>Date Range</h3>
    <h3>Custom Search</h3>
    <tr>
      <td>Timestamp</td>
      <td>Severity</td>
      <td>Message</td>
    </tr>
    <tr v-for="(log, index) in logs" :key="index">
      <td>{{ log.timestamp }}</td>
      <td>{{ log.severity }}</td>
      <td>{{ log.message }}</td>
    </tr>
  </div>
</template>

<script>
import filters from '../scripts/filterMethods'

export default {
  name: 'LogViewer',
  props: {
     logs: {
        type: Array,
        required: true
     }
  },
  data() { return {

  }},
  methods: {
     test () {
        filters.foo()
     }
  }
}
</script>

<style scoped>
ul {
   list-style-type: none;
   margin: 0;
   padding: 0;
}

td {
   padding-top: 10px;
   padding-bottom: 10px;
}
</style>
