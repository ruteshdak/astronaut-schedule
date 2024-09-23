export class Logger {
    static log(message: string) {
        console.log(`[LOG] ${new Date().toString()}:${message}`);
    }
}