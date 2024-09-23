import { Task } from './Task'

export class TaskFactory {
    static createTask(description: string, startTime: string, endTime: string, priority: string): Task {
        return new Task(description, startTime, endTime, priority)
    }
}