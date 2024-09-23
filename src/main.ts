import { ScheduleManager } from "./ScheduleManager";
import * as readline from 'readline';

// Get the singleton instance of ScheduleManager
const scheduleManager = ScheduleManager.getInstance();

// Create readline interface for input/output
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
                rl.close();  // Properly close the readline interface
                break;
            default:
                console.log('Invalid option, please try again.');
                mainMenu();  // Return to menu if an invalid option is chosen
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

// Start the application
mainMenu();

