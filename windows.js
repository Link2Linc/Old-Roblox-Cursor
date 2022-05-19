"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// beta script to work on windows
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const homedir = os_1.default.homedir();
var getMostRecent = function (dir, cb) {
    var dir = homedir + "/Documents";
    var files = fs_1.default.readdir(dir, function (err, files) {
        var sorted = files.map(function (v) {
            var filepath = path_1.default.resolve(dir, v);
            return {
                name: v,
                time: fs_1.default.statSync(filepath).mtime.getTime()
            };
        })
            .sort(function (a, b) { return b.time - a.time; })
            .map(function (v) { return v.name; });
        if (sorted.length > 0) {
            cb(null, sorted[0]);
        }
        else {
            cb('Roblox appears to not be installed. Why do you plan to restore the old Roblox cursor, when Roblox doesn\'t even exist?', null);
        }
    });
};
getMostRecent('./', function (err, recent) {
    if (err)
        console.error(err);
    console.log(recent);
});
