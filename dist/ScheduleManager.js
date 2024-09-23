"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleManager = void 0;
const TaskFactory_1 = require("./TaskFactory");
const TaskObserver_1 = require("./TaskObserver");
class ScheduleManager {
    constructor() {
        this.tasks = [];
    }
    static getInstance() {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }
    checkOverlap(newTask) {
        for (const task of this.tasks) {
            if (newTask.startTime < task.endTime && newTask.endTime > task.startTime) {
                return task;
            }
        }
        return null;
    }
    addTask(description, startTime, endTime, priority) {
        const newTask = TaskFactory_1.TaskFactory.createTask(description, startTime, endTime, priority);
        const conflict = this.checkOverlap(newTask);
        if (conflict) {
            TaskObserver_1.TaskObserver.notifyConflict(newTask, conflict);
        }
        else {
            this.tasks.push(newTask);
            this.tasks.sort((a, b) => (a.startTime < a.endTime ? -1 : 1));
            console.log(`Task "${newTask.description}" addedd successfully.No conflicts`);
        }
    }
    removeTask(description) {
        const taskIndex = this.tasks.findIndex(task => task.description === description);
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task "${description}" removed successfully`);
        }
        else {
            console.log(`Error! Task "${description}" not found`);
        }
    }
    viewTasks() {
        if (this.tasks.length == 0) {
            console.log("No such tasks scheduled for the day");
        }
        else {
            console.log("Taks for the day");
            this.tasks.forEach(task => {
                console.log(`${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}]${task.isCompleted ? ' (Completed)' : ''}`);
            });
        }
    }
    markTaskCompleted(description) {
        const task = this.tasks.find(task => task.description === description);
        if (task) {
            task.isCompleted = true;
            TaskObserver_1.TaskObserver.notifyUpdate(task);
            console.log(`Task "${description}" marked as completed.`);
        }
        else {
            console.log(`Error: Task "${description}" not found.`);
        }
    }
    viewTasksByPriority(priority) {
        const priorityTasks = this.tasks.filter(task => task.priority === priority);
        if (priorityTasks.length == 0) {
            console.log(`No tasks found with priority "${priority}"`);
        }
        else {
            console.log(`Tasks with priority "${priority}":`);
            priorityTasks.forEach(task => {
                console.log(`${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}]${task.isCompleted ? ' (Completed)' : ''}`);
            });
        }
    }
}
exports.ScheduleManager = ScheduleManager;
