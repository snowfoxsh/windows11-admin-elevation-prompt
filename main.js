const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    width: 570,
    height: 733,
    webPreferences: {
      nodeIntegration: true,
	  contextIsolation: true,
	  preload: path.join(__dirname, 'preload.js')

    }
  })

  // Load the HTML file.
  win.loadFile('index.html')

  // Add the "images" directory to Electron's file path.
//   const imagePath = path.join(__dirname, 'images')
//   app.use(express.static(imagePath))
}

// When the app is ready, create the window.
app.whenReady().then(createWindow)
