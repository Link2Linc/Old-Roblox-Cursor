"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const homedir = os_1.default.homedir();
const platform = os_1.default.platform();
console.log(platform);
let customPath;
if (process.argv[2] === '--custom') {
    customPath = process.argv[3];
}
console.log(customPath);
