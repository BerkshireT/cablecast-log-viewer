/* 
Separates each log line into an object of
TIMESTAMP, SEVERITY, MESSAGE
This is assuming all log files share the same structure and delimeters,
different orderings will break this
*/
var frame = {
   createFrame(logs) {
      let logsFrame = []
      logs.forEach(function(line) {
         if (line.length === 0) { return }

         var currentFrame = new Object()

         // I wanted to use .split() here but it doesn't return the remainder of a match; indexes it is :/
         var end = line.indexOf(']')
         currentFrame.timestamp = line.substring(1, end)
         var tempSplit = line.substring(end + 2)

         end = tempSplit.indexOf(' ')
         currentFrame.severity = tempSplit.substring(0, end)
         tempSplit = tempSplit.substring(end + 1)

         currentFrame.message = tempSplit

         logsFrame.push(currentFrame)
      })
      return logsFrame
   }
}

export default frame