const { execSync } = require('child_process')
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    maximizable: false,
    resizable: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })
  win.menuBarVisible = false
  win.setIcon(path.join(__dirname, 'assets/package.ico'));
  win.loadFile('pages/mainpage.html')
  
}

app.whenReady().then(() => {
  createWindow()

  ipcMain.on("command", (err, data) => {
    const com = execSync(data, {encoding: "utf-8"})
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
