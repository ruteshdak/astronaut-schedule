export class Task {
    constructor(
        public description: string,
        public startTime: string,
        public endTime: string,
        public priority: string,
        public isCompleted:boolean = false
    ) { }
}