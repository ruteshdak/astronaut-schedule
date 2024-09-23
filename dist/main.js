"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleManager_1 = require("./ScheduleManager");
const readline = __importStar(require("readline"));
const scheduleManager = ScheduleManager_1.ScheduleManager.getInstance();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mainMenu() {
    console.log(`
        1. Add Task
        2. Remove Task
        3. View All Tasks
        4. Mark Task as Completed
        5. View Tasks by Priority
        6. Exit
    `);
    rl.question('Choose an option: ', (choice) => {
        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                removeTask();
                break;
            case '3':
                viewTasks();
                break;
            case '4':
                markTaskCompleted();
                break;
            case '5':
                viewTasksByPriority();
                break;
            case '6':
                console.log('Exiting the application.');
                rl.close();
                break;
            default:
                console.log('Invalid option, please try again.');
                mainMenu();
                break;
        }
    });
}
function addTask() {
    rl.question('Enter task description: ', (description) => {
        rl.question('Enter start time (HH:MM): ', (startTime) => {
            rl.question('Enter end time (HH:MM): ', (endTime) => {
                rl.question('Enter priority (High, Medium, Low): ', (priority) => {
                    scheduleManager.addTask(description, startTime, endTime, priority);
                    mainMenu();
                });
            });
        });
    });
}
function removeTask() {
    console.log("Here are the current tasks:");
    scheduleManager.viewTasks();
    rl.question('Enter the description of the task to remove: ', (description) => {
        scheduleManager.removeTask(description);
        mainMenu();
    });
}
function viewTasks() {
    scheduleManager.viewTasks();
    mainMenu();
}
function markTaskCompleted() {
    rl.question('Enter the description of the task to mark as completed: ', (description) => {
        scheduleManager.markTaskCompleted(description);
        mainMenu();
    });
}
function viewTasksByPriority() {
    rl.question('Enter the priority level to view (High, Medium, Low): ', (priority) => {
        scheduleManager.viewTasksByPriority(priority);
        mainMenu();
    });
}
mainMenu();
