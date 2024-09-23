"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskObserver = void 0;
class TaskObserver {
    static notifyConflict(task, conflictingTask) {
        console.log(`Error: Task "${task.description}" conflicts with existing task "${conflictingTask.description}"`);
    }
    static notifyUpdate(task) {
        console.log(`Task "${task.description}" has been updated`);
    }
}
exports.TaskObserver = TaskObserver;
