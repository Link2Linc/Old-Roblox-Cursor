"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const folderPath = '/Users/lincolnmuller';
const lol = fs_1.default.readdirSync(folderPath);
console.log(lol);
