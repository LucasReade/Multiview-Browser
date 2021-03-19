// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {BrowserWindow} = require('electron').remote;

window.addEventListener('DOMContentLoaded', () => {

const window = BrowserWindow.getFocusedWindow();
const frameControl = document.querySelector('frame-controls');

frameControl.windowMaximised = window.isMaximized();

frameControl.addEventListener('minimise', () => {
    window.minimize();
});
frameControl.addEventListener('restore', () => {
    window.restore();
});
frameControl.addEventListener('maximise', () => {
    window.maximize();
});
frameControl.addEventListener('close', () => {
    window.close();
});

});
