import {Task} from './Task'

export class TaskObserver{
    static notifyConflict(task:Task,conflictingTask:Task){
        console.log(`Error: Task "${task.description}" conflicts with existing task "${conflictingTask.description}"`)

    }
    static notifyUpdate(task:Task){
        console.log(`Task "${task.description}" has been updated`);
    }
}