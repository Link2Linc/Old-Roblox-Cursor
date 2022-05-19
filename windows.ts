// beta script to work on windows
import fs from 'fs';
import os from 'os';
import path from 'path';
const homedir = os.homedir();

var getMostRecent = function (dir: string, cb: any) {
	var dir = homedir
	var files = fs.readdir(dir, function (err, files) {
		var sorted = files.map(function(v) {
			var filepath = path.resolve(dir, v);
			return {
				name:v,
				time:fs.statSync(filepath).mtime.getTime()
			}; 
		})
		.sort(function(a, b) { return b.time - a.time; })
		.map(function(v) { return v.name; });

		if (sorted.length > 0) {
			cb(null, sorted[0]);
		} else {
			cb('Roblox appears to not be installed. Why do you plan to restore the old Roblox cursor, when Roblox doesn\'t even exist?', null);
		}
	})
}

getMostRecent('./', function (err: any, recent: any) {
	if (err) console.error(err);
	console.log(recent);
});