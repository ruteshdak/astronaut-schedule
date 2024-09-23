Astronaut Task Scheduler
Overview
The Astronaut Task Scheduler is a console-based application that helps astronauts organize and manage their daily schedules. The application allows users to add, remove, and view tasks based on priority and time. It also ensures that tasks do not overlap and provides helpful feedback for scheduling conflicts. This scheduler ensures that astronauts can efficiently manage their time in space, optimizing their daily activities.

Features
Add a Task: Add new tasks with descriptions, start and end times, and priority levels.
Remove a Task: Remove a task from the schedule based on its description.
View All Tasks: Display all scheduled tasks sorted by start time.
Mark Task as Completed: Mark any task as completed.
View Tasks by Priority: View tasks based on their priority level (High, Medium, Low).
Conflict Detection: The app checks for any time conflicts with existing tasks and alerts the user.
Design Patterns
The application makes use of common design patterns:

Singleton Pattern: Ensures that only one instance of the ScheduleManager exists throughout the application.
Factory Pattern: The TaskFactory is used to create task objects.
Observer Pattern: Notifies users of task conflicts or updates.


