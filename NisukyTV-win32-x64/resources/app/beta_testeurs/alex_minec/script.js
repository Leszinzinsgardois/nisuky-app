new Vue({
    el: '#app',
    data: {
        darkMode: false,
        accountName: 'alex_minec',
        profileIconUrl: 'https://images-ext-2.discordapp.net/external/6UjQ3q3BXPXQtqY27x8YBRURLiUaMtMryRWybZeXwEQ/%3Fsize%3D128/https/cdn.discordapp.com/avatars/524979977096134657/0743c6fd44cd25eed906186bb120632b.png',
        roles: [
            { name: 'Ami(e)s', color:  '#A50457' },
            { name: 'Abonné', color: '#2ECC71'},
            { name: 'Bêta Testeur NisukyTV', color:'#E74C3C'},
           

            // Ajoutez d'autres rôles ici
        ],
        rolesUpdatedAt: '05/11/2023',
        accountId: '524979977096134657',
        serverIconUrl: 'https://media.discordapp.net/attachments/1170464750195441754/1170476925253337088/NISUKY_logo.jpg?ex=65592e95&is=6546b995&hm=0620b2bea2396aa0a3522cc396f86cd857d9b5cbcbe979f3acd3aeb8d6f04264&=',
        serverJoinDate: 'Mercredi 5 Juillet 2023',
        betaJoinDate: '04/11/2023'
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            if (this.darkMode) {
                // Mettez en œuvre le mode sombre
                document.body.classList.add('dark-mode');
            } else {
                // Mettez en œuvre le mode jour
                document.body.classList.remove('dark-mode');
            }
        }
    }
});

