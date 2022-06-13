"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
var rl = readline_1.default.createInterface(process.stdin, process.stdout);
rl.question('Please enter custom cursor path. Note: only .png files are supported\n', (path) => {
    console.log('Custom cursor path is ' + path);
    rl.close();
});
