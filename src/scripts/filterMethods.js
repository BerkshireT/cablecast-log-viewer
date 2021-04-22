var filters = {
   info(logs) { 
      var filteredLogs = []

      logs.forEach(function(line) {
         if (line.severity == "INFO") {
            filteredLogs.push(line)
         }
      })

      return filteredLogs
   },

   warning(logs) { 
      var filteredLogs = []

      logs.forEach(function(line) {
         if (line.severity == "WARN") {
            filteredLogs.push(line)
         }
      })

      return filteredLogs
   },

   error(logs) { 
      var filteredLogs = []

      logs.forEach(function(line) {
         if (line.severity == "ERROR") {
            filteredLogs.push(line)
         }
      })

      return filteredLogs
   }
}

export default filters