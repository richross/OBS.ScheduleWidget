# OBS.ScheduleWidget
Simple web page to display the schedule for an event, in this case the Philly.net code camp 2018.  This page was used as a locally hosted file source for OBS to display in one of the scenes.  

The page displays the current list of sessions based on the value of the 'sessionBlock' query string.  The webpage can be deployed or just run locally in a container.  

OBS also provides the ability to just load the file locally.  While this would work for our purpose, you cannot include the query string parameter this way, so you need to see the session to display in the app.js file.  You can also include the 'update information when switching scenes', so the content easily refreshes for any changes made.

Not completely pretty from the admin side, but it is quick, easy and worked well for our sessions.

Comments and updates are welcome!