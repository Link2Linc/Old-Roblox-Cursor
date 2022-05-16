"use strict";
const os = require('os');
const homefolder = os.homedir();
const hostname = os.hostname();
const platform = os.platform();
const tempFiles = os.tmpdir();
const type = os.type();
const uptime = os.uptime();
const verison = os.version();
console.log("Your home-folder is" + homefolder + ". We are now putting this into a file and uploading it to our super secret server.");
console.log("Also, some more super secret information about your computer! Your hostname is " + hostname + "!");
if (platform === 'win32') {
    console.log("Fuck you, you are on Windows!");
}
console.log("Cluttering your temporary directory with useless log files... (btw, ur temp files directory is " + tempFiles + ")");
console.log("your OS type is " + type + "!");
console.log("Damn. Your computer has been up for " + uptime + " seconds!");
console.log("You are pushing your computer to the limit. Your computer is running version " + verison + "!");
