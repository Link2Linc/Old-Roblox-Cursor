"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
var rl = readline_1.default.createInterface(process.stdin, process.stdout);
const custompath = rl.question('Please enter custom cursor path. Note: only .png files are supported. Just drag the file from file explorer into the terminal.\n', (path) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Custom cursor path is ' + path);
    rl.close();
    return path;
}));
fs_1.default.open(custompath, 'r', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Custom cursor file opened successfully');
});
