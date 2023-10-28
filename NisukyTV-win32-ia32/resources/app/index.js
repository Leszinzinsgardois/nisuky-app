const { app, BrowserWindow, Menu, shell } = require('electron');

let mainWindow;
let loadingWindow;
let maintenanceWindow; // Ajout de cette ligne

const createLoadingWindow = () => {
    loadingWindow = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    loadingWindow.loadFile('loading.html');

    loadingWindow.on('closed', () => {
        loadingWindow = null;
        createMainWindow();
    });

    setTimeout(() => {
        loadingWindow.close();
    }, 8000);
};

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        icon: './NISUKY_logo.jpg'
    });

    mainWindow.loadFile('index.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        showMaintenancePage();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const customMenu = Menu.buildFromTemplate([
        {
            label: 'Navigation',
            submenu: [
                {
                    label: 'Retour à l\'accueil',
                    click: () => {
                        mainWindow.loadFile('./index.html');
                    } 
                },
                { type: 'separator' },
                {
                    label: 'Rejoindre les Bêta Testeurs!',
                    click: () => {
                        shell.openExternal('https://www.google.com');
                    }
                },
                { type: 'separator' },
                {
                    label: 'Recharger la page',
                    role: 'reload'
                },
                
            ]
        },
        {
            label: 'Application',
            submenu: [
                { 
                    label: 'Réduire l\'application',
                    role: 'minimize'
                },
                {
                    label: 'Console de Développement - Bêta Only',
                    role: 'toggleDevTools'
                },
                { type: 'separator'},
                {
                    label: 'Quiiter',
                    role: 'quit'
                },
                { type: 'separator' },
                {
                    label: 'Afficher l\'Avis de Maintenance',
                    click: () => {
                        showMaintenancePage();
                    }
                }
            ]
        }
    ]);

    Menu.setApplicationMenu(customMenu);
};

function showMaintenancePage() {
    if (!maintenanceWindow) {
        maintenanceWindow = new BrowserWindow({
            width: 800,
            height: 600,
            alwaysOnTop: true,
            frame: false,
            transparent: true,
            webPreferences: {
                nodeIntegration: true
            }
        });

        maintenanceWindow.loadFile('pop-up.html');

        maintenanceWindow.on('closed', () => {
            maintenanceWindow = null;
        });
    }
}

app.on('ready', createLoadingWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createLoadingWindow();
    }
});
