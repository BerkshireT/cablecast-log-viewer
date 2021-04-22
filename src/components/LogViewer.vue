<template>
  <div class="LogViewer">
    <h3>Filters</h3>
    <div id="filterButtons">
      <button @click="InfoFilter" v-bind:class="infoFilter ? 'green' : 'default'">INFO</button>
      <button @click="WarningFilter" v-bind:class="warningFilter ? 'green' : 'default'">WARN</button>
      <button @click="ErrorFilter" v-bind:class="errorFilter ? 'green' : 'default'">ERROR</button>
    </div>
    <h3>Date Range</h3>
    <h3>Custom Search</h3>
    <tr>
      <td id="label">Timestamp</td>
      <td id="label">Severity</td>
      <td id="label">Message</td>
    </tr>
    <tr v-for="(log, index) in computeLogs" :key="index">
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
     infoFilter: false,
     warningFilter: false,
     errorFilter: false,
     noResults: [ { timestamp: '', severity: '', message: 'no results found'} ]
  }},
  methods: {
     InfoFilter () {
        this.infoFilter = !this.infoFilter
        this.warningFilter = false
        this.errorFilter = false
     },
     WarningFilter () {
        this.infoFilter = false
        this.warningFilter = !this.warningFilter
        this.errorFilter = false
     },
     ErrorFilter () {
        this.infoFilter = false
        this.warningFilter = false
        this.errorFilter = !this.errorFilter
     }
  },
  computed: {
     computeLogs() {
        var filteredLogs
        if (this.infoFilter) {
           filteredLogs = filters.info(this.logs)
        } else if (this.warningFilter) {
           filteredLogs = filters.warning(this.logs)
        } else if (this.errorFilter) {
           filteredLogs = filters.error(this.logs)
        } else {
           filteredLogs = this.logs
        }

        if (filteredLogs.length == 0) {
           return this.noResults
        } else {
           return filteredLogs
        }
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

button {
   margin: 5px 20px 5px 20px;
}

#filterButtons {
   display: inline-block;
}

#label {
   padding-left: 10px;
   padding-right: 10px;
}

.default {
   
}

.green {
   color: white;
   background-color: #2CB466;
   border-color: #2CB466;
}
</style>
