## notes to be deleted
# Acceptence Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


mobile friendly **
** use preset css from develop folder
1 collumn, row for each input
in row 3 collumn (time)(input)(button to save/update input)
each row changes color given time of day (by hour in collumn 1, before current, after)

if (id < given time before color) else if (id=given time(hour) hour of color) else (hour after color)
inut for each business hour (9am-5pm) (6am-10pm)
local storage for each input