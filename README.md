# CablecastLogViewer
 PoC exercise for Tightrope Media Systems. This exercise involved creating a web application to filter log files.

## Info
 This was a web application built using Vue.JS. Simply run the commands below to run a local build. Log files are read through your local system, so make sure to give your browser access and have some sample logs ready for testing. This application only accepts .log files and they require a specific format to be parsed correctly. Logs can be filtered by severity and custom message queries. I was unable to implement filtering by date ranges. I was also trying to complete ordereing logs by ascending/descending order, but it was very buggy and I ended up disabling it. You also need to refresh the page to load a new file :)

## Setup
```
 npm install
```

```
 npm run serve
```
