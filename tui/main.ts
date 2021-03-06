import fs, { copyFileSync } from 'fs';
if (process.platform !== 'darwin') {
  console.log('This script is for macOS only, run "tsc && node windows.js" for Windows.');
  process.exit(1);
}

async function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time*1000))
};

async function waitForKey(keyCode: number) {
    return new Promise<void>(resolve => {
        process.stdin.on('data',function (chunk) {
            if (chunk[0] === keyCode) {
                resolve();
                process.stdin.pause();
            }
        });
    });
}

async function welcomeMessage() {
    console.log("Welcome to the Roblox cursor backup script!\n This script will backup your current Roblox cursor and replace it with the old 2021 Roblox cursor.\n\n Please make sure you have a Roblox client closed. \n This script is prefixed at /Applications/Roblox.app, if you are non-admin please run the command with the --noadmin flag.\n\n Press enter to continue. \n\n ---------------------------------------------------------");
    // if user presses enter in the terminal, continue 
    await waitForKey(13);
}


async function bringBackOldCursorMac() {
    var oldBackupDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/';
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    if (!fs.existsSync(oldBackupDir)) {
        fs.mkdirSync(oldBackupDir);
    };
    console.log("Created backup directory #1");
    await delay(2);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    await delay(1);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var cursorBackup = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup';
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    await delay(1);
    if (!fs.existsSync(cursorBackup)) {
        fs.mkdirSync(cursorBackup);
    };
    console.log("Created backup directory #2");
    await delay(2);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    await delay(1);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err: any) {
        if (err) throw err
        console.log('Copied ' + oldDir + ' to ' + newDir)
    });
    await delay(1);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err: any) {
        if (err) throw err
        console.log('Copied ' + oldDir + ' to ' + newDir)
        console.log("Successfully completed operation. Please restart your Roblox client.");
    });
}

welcomeMessage();

function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    console.log("Successfully completed operation. Please restart your Roblox client.");
}

if (process.platform === 'darwin' && process.argv[2] === '--revert') {
    revertDefaultCursorMac();
  } else {
    console.log('No arguments passed, defaulting to new cursor');
    bringBackOldCursorMac();
  }

