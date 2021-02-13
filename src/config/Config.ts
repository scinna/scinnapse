import {app}   from "electron";
import * as fs from "fs";

export default class Config {

    private constructor() {

    }

    public static loadConfig(): Config {
        const appLocation = app.getPath('appData') + '/scinnapse/';
        if (!fs.existsSync(appLocation)) {
            fs.mkdirSync(appLocation);
        }

        const configLocation = appLocation + 'config.json';
        if (!fs.existsSync(configLocation)) {
            // @TODO: Load initial configuration
        }

        console.log(appLocation);

        return new Config();
    }

    public saveConfig(): void {

    }

}