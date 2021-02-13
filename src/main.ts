import {app}      from 'electron';
import SystemTray from './tray/SystemTray';
import Config     from "./config/Config";

const lock = app.requestSingleInstanceLock();
const config = Config.loadConfig();

if (!lock) {
    console.error('Only one instance of Scinnapse can be ran at any given time');
    app.quit();
} else {
    app.whenReady().then(() => {
        new SystemTray('./assets/icon.png');
    });
}
