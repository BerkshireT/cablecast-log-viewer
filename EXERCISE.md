# Coding Excercise

## Problem

The `cablecast_video_server.exe` is the video server engine that powers modern Cablecast video servers. It runs 24/7 playing files, network streams, slide shows as well as recording all manner of live sources. It's common for Cablecast Engineers and Support Techs to need to review these logs in order to diagnose issues on test and customer systems. The logs can be extremely verbose, and using `notepad.exe` on the system can be troublesome.

## Proposed Solution

The team has decided it would be extremely valuable to be able to view these logs in the Cablecast Web User Interface in order to quickly find warnings, errors, and other helpful information. The goal is to be able to review segmented logs quicky and enable easy filtering of different log levels (warning, error, info).

## Your Task

Prototype a proof of concept web app that allows for reviewing video server logs in the web browser. 
- Only spend up to 6 hours on the problem, a complete solution is not required, get as far as you can. Not meeting all the requirements is fine
- A complete solution is not expected, instead it is a starting point for a discussion.

### Requirements
 - Sample zips of real system log files can be found here: https://trms.box.com/s/z5c1a9x8ae2m1ujgogg64l9m025ph12m
 - Display the logs
 - Allow filtering for `warning` and / or `error` logs
 - Allow ad hoc searching log messages
 - Allow filtering by date range

## Notes
Remember, you can solve this any way you want. There is no right or wrong answer. The only restrictions are you have to write some code. You can't just load all the data into a log analytic service and call it a day :)