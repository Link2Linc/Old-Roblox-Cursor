"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
fs_1.default.rename(oldPath, newPath, function (err) {
    if (err)
        throw err;
    console.log('Moved ' + oldPath + ' to ' + newPath);
});
var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
fs_1.default.rename(oldPath, newPath, function (err) {
    if (err)
        throw err;
    console.log('Moved ' + oldPath + ' to ' + newPath);
});
