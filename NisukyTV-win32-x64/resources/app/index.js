const { app, BrowserWindow, Menu, shell } = require('electron');
const { Client } = require('discord-rpc');
const rpc = new Client({ transport: 'ipc' });

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
    }, 10000);
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
                    label: 'Quitter',
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
        },
        {
            label:'Version Bêta',
            submenu: [
                {
                    label: 'Accéder à mon profil',
                    click: () => {
                        mainWindow.loadFile('.beta_testeurs/login.html');
                    }
                },
                {
                    label: 'Historique des Mises à Jour/Devlogs',
                    click: () => {
                        mainWindow.loadFile('./devlogs/devlogs.html');
                    }
                },
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
})

app.on('activate', () => {
    if (mainWindow === null) {
        createLoadingWindow();
    }
});

let isRPCStarted = false;

rpc.on('ready', () => {
  isRPCStarted = true;
  console.log('RPC Discord est prêt.');
});

// Attends quelques secondes (par exemple, 5 secondes) après le lancement de l'application
setTimeout(() => {
  if (!isRPCStarted) {
    rpc.login({ clientId: '1167947811040546847' }).catch(console.error);
  }
}, 8000); // 5000 millisecondes équivalent à 5 secondes

rpc.on('ready', () => {
  rpc.setActivity({
    details: 'NisukyTV v0.1 Bêta',
    state: 'Watching',
    largeImageKey: 'NISUKY_logo.jpg',
    largeImageText: 'NisukyTV',
  });
});

