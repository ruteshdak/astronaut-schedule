"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(message) {
        console.log(`[LOG] ${new Date().toString()}:${message}`);
    }
}
exports.Logger = Logger;
