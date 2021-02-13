import {
  BrowserWindow, Tray, Menu, MenuItem, app,
} from 'electron';

type onClick = (menuItem: MenuItem, browserWindow: (BrowserWindow) | (undefined), event: KeyboardEvent) => void;

export default class SystemTray {
    private menu: Menu = null;

    private trayIcon: Tray = null;

    constructor(icon: string) {
      this.trayIcon = new Tray(icon);
      this.trayIcon.setToolTip('Scinnapse');

      this.menu = new Menu();
      this.menu.append(new MenuItem({ label: 'Capture everything' }));
      this.menu.append(new MenuItem({ label: 'Capture region' }));
      this.menu.append(SystemTray.separator());
      this.menu.append(new MenuItem({
        label: 'Exit',
        click: () => {
          app.quit();
        },
      }));

      this.trayIcon.setContextMenu(this.menu);
    }

    private static separator(): MenuItem {
      return new MenuItem({ type: 'separator' });
    }

    public addMenuItem(label: string, click: onClick): void {
      const toto = 'tutu';
      this.menu.insert(this.menu.items.length - 3, new MenuItem({ label, click }));
    }
}
