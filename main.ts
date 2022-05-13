import fs from 'fs';

// if we are on MacOS, we need to run the platform specific commands, using process.platform
if (process.platform === 'darwin') {
  var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
  var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err  
    console.log('Moved ' + oldPath + ' to ' + newPath)
  })
  var oldPath = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
  var newPath = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png'; 
  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err
    console.log('Moved ' + oldPath + ' to ' + newPath)
  })
}

// if we are on Windows, we need to run the platform specific commands, using process.platform
// windows is not officially supported, due to ever changing versions. It is planned to be supported in the future.
//if (process.platform === 'win32') {
//  var oldPath = 'C:\\Program Files (x86)\\Roblox\\Roblox.exe';
//  var newPath = 'C:\\Program Files (x86)\\Roblox\\Roblox.exe';
//  fs.rename(oldPath, newPath, function (err) {
//    if (err) throw err
//    console.log('Moved ' + oldPath + ' to ' + newPath)
//  })
//  var oldPath = 'C:\\Program Files (x86)\\Roblox\\Roblox.exe';
//  var newPath = 'C:\\Program Files (x86)\\Roblox\\Roblox.exe';
//  fs.rename(oldPath, newPath, function (err) {
//    if (err) throw err
//    console.log('Moved ' + oldPath + ' to ' + newPath)
//  })
//}