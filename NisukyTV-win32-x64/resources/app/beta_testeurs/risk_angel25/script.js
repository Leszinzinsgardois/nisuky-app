new Vue({
    el: '#app',
    data: {
        darkMode: false,
        accountName: 'Risk_angel25',
        profileIconUrl: 'https://images-ext-2.discordapp.net/external/tppLIXPFLwACzuEVyHeMRSJONsnrcGnnQsMHn-H7P2M/%3Fsize%3D128/https/cdn.discordapp.com/avatars/853215969882406933/6d934243189c33ffb4955aa5340a19a2.png',
        roles: [
            { name: 'Modo', color: '#00B1FF'},
            { name: 'Ami(e)s', color:  '#A50457' },
            { name: 'Abonné', color: '#2ECC71'},
            { name: 'Bêta Testeur NisukyTV', color:'#E74C3C'},
            { name: 'Annonces', color: '#997126'},
            { name: '+4'}           

            // Ajoutez d'autres rôles ici
        ],
        rolesUpdatedAt: '04/11/2023',
        accountId: '853215969882406933',
        serverIconUrl: 'https://media.discordapp.net/attachments/1170464750195441754/1170476925253337088/NISUKY_logo.jpg?ex=65592e95&is=6546b995&hm=0620b2bea2396aa0a3522cc396f86cd857d9b5cbcbe979f3acd3aeb8d6f04264&=',
        serverJoinDate: 'Jeudi 21 Juillet 2022',
        betaJoinDate: '20/10/2023'
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

