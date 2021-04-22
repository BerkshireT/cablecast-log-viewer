<template>
  <div class="LogViewer">
    <h3>Severity</h3>
    <div id="filterButtons">
      <button @click="InfoFilter" v-bind:class="infoFilter ? 'green' : 'default'">INFO</button>
      <button @click="WarningFilter" v-bind:class="warningFilter ? 'green' : 'default'">WARN</button>
      <button @click="ErrorFilter" v-bind:class="errorFilter ? 'green' : 'default'">ERROR</button>
    </div>

    <h3>Timestamp</h3>
    <div id="dateButtons">
       <button @click="DateOrderSwap" :disabled="ascending" v-bind:class="ascending ? 'green' : 'default'">Ascending</button>
       <button @click="DateOrderSwap" :disabled="!ascending" v-bind:class="!ascending ? 'green' : 'default'">Descending</button>
       <label for="date">example: </label>
       <input name="date" type="text">
    </div>   

    <h3>Message Search</h3>
    <div id="searchButtons">
       <input name="search" type="text" v-model="searchString"><br><br>
    </div>

    <table>
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
    </table>
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
     ascending: true,
     firstLoad: true,
     searchString: '',
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
     },
     DateOrderSwap() {
        this.ascending = !this.ascending
        this.firstLoad = false
     }
  },
  computed: {
     computeLogs() {
        var filteredLogs = this.logs

        // Severity
        if (this.infoFilter) {
           filteredLogs = filters.info(filteredLogs)
        } else if (this.warningFilter) {
           filteredLogs = filters.warning(filteredLogs)
        } else if (this.errorFilter) {
           filteredLogs = filters.error(filteredLogs)
        }

        // Date
        if ((this.ascending && !this.firstLoad) || !this.ascending) { // logs are always asc when first loaded so no need to flip
           filteredLogs = filteredLogs.reverse()
        }

        //Search
        if (this.searchString.length != 0) {
           filteredLogs = filters.search(filteredLogs, this.searchString)
        }

        // Empty check
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

tr:hover {
   background-color: #2CB466;
   color: white;
}

button {
   margin: 5px 20px 5px 20px;
}

#filterButtons, #dateButtons, #searchButtons {
   display: inline-block;
}

#label {
   font-weight: bold;
   padding-left: 10px;
   padding-right: 10px;
   border: 1px solid black;
}

.default {
   
}

.green {
   color: white;
   background-color: #2CB466;
   border-color: #2CB466;
}
</style>
