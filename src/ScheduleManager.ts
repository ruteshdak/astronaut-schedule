import { Task } from './Task'
import { TaskFactory } from './TaskFactory'
import { TaskObserver } from './TaskObserver'

export class ScheduleManager {
    private static instance: ScheduleManager;
    private tasks: Task[] = [];
    private constructor() { }
    public static getInstance(): ScheduleManager {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();

        }
        return ScheduleManager.instance;
    }


    // overlap
    private checkOverlap(newTask: Task): Task | null {
        for (const task of this.tasks) {

            if (newTask.startTime < task.endTime && newTask.endTime > task.startTime) {
                return task;
            }
        }
        return null;
    }



    // adding a task
    public addTask(description: string, startTime: string, endTime: string, priority: string) {
        const newTask = TaskFactory.createTask(description, startTime, endTime, priority);
        const conflict = this.checkOverlap(newTask);
        if (conflict) {
            TaskObserver.notifyConflict(newTask, conflict);
        }
        else {
            this.tasks.push(newTask);
            this.tasks.sort((a, b) => (a.startTime < a.endTime ? -1 : 1));
            console.log(`Task "${newTask.description}" addedd successfully.No conflicts`);
        }
    }



    //remove task
    public removeTask(description: string): void {
        const taskIndex = this.tasks.findIndex(task => task.description === description);
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task "${description}" removed successfully`);
        }
        else {
            console.log(`Error! Task "${description}" not found`);
        }

    }

    // View all tasks
    public viewTasks(): void {
        if (this.tasks.length == 0) {
            console.log("No such tasks scheduled for the day");
        }
        else {
            console.log("Taks for the day");
            this.tasks.forEach(task => {
                console.log(
                    `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}]${task.isCompleted ? ' (Completed)' : ''}`
                )

            })
        }
    }


    //mark as completed
    public markTaskCompleted(description: string): void {
        const task = this.tasks.find(task => task.description === description)
        if (task) {
            task.isCompleted = true;
            TaskObserver.notifyUpdate(task);
            console.log(`Task "${description}" marked as completed.`);
        }
        else {
            console.log(`Error: Task "${description}" not found.`);
        }
    }

    //view task for specific priority level

    public viewTasksByPriority(priority: string): void {
        const priorityTasks = this.tasks.filter(task => task.priority === priority)
        if (priorityTasks.length == 0) {
            console.log(`No tasks found with priority "${priority}"`)

        }
        else {
            console.log(`Tasks with priority "${priority}":`)
            priorityTasks.forEach(task => {
                console.log(
                    `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}]${task.isCompleted ? ' (Completed)' : ''}`
                )
            })
        }
    }


}