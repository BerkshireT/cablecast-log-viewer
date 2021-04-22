<template>
  <div id="app">
    <img alt="Cablecast logo" src="./assets/logo.png" width="250px">
    <h1>Cablecast Log Viewer</h1>

    <input type="file" accept=".log" @change="loadLogs">

    <LogViewer v-if="logsLoaded" :logs="logs"/>
  </div>
</template>

<script>
import LogViewer from './components/LogViewer.vue'
import frame from './scripts/createFrame'

export default {
  components: { LogViewer },
  name: 'App',
  data() { return {
    logsLoaded: false,
    logs: [],
  }},
  methods: {
    loadLogs (event) {
      var file = event.target.files[0]
      var reader = new FileReader()
      var self = this // need this so the closure can assign data to vue object

      reader.onload = (function(reader) {
        return function() {
          var contents = reader.result
          var lines = contents.split('\n')

          self.logs = frame.createFrame(lines)
          self.logsLoaded = true
        }
      })(reader)
      
      try {
        reader.readAsText(file)
      }
      catch (err) { // exiting out of the file popup throws an error, quick fix
        console.log(err.message)
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
