"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        show: false,
        autoHideMenuBar: true,
        // icon: path.join(__dirname, 'dist/angular-electron/assets/icons/icon-72x72.png'),
        icon: "file://" + __dirname + "/dist/angular-electron/assets/icons/icon-72x72.png",
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/angular-electron/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    // uncomment below to open the DevTools.
    // mainWindow.webContents.openDevTools()
    // Load the angular app.
    // mainWindow.loadFile(resolve('dist/index.html'));
    // Show the mainwindow when it is loaded and ready to show
    mainWindow.once('ready-to-show', function () {
        mainWindow.show();
    });
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// ipcMain.on("getFiles", (event, arg) => {
//   const files = fs.readdirSync(__dirname);
//   mainWindow.webContents.send("getFilesResponse", files);
// });
//# sourceMappingURL=main.js.map