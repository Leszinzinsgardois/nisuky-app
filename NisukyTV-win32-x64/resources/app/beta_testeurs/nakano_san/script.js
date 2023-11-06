new Vue({
    el: '#app',
    data: {
        darkMode: false,
        accountName: 'Concepteur: Nakano San',
        profileIconUrl: 'https://cdn.discordapp.com/avatars/733320797245931520/33193d2d7aef9d444c1491aaa5f694d7.png?size=128',
        roles: [
            { name: 'Chef du Staff', color: '#AD4242' },
            { name: 'Administrateur', color: '#FF0000'},
            { name: 'Développeur', color: '#98F884' },
            { name: 'Ami(e)s', color:  '#A50457' },
            { name: 'Membre Fidèle', color: '#20006B'},
            { name: 'Abonné', color: '#2ECC71'},
            { name: 'Bêta Testeur NisukyTV', color:'#E74C3C'},
            { name: 'Annonces', color: '#997126'}            

            // Ajoutez d'autres rôles ici
        ],
        rolesUpdatedAt: '04/11/2023',
        accountId: '733320797245931520',
        serverIconUrl: 'https://media.discordapp.net/attachments/1170464750195441754/1170476925253337088/NISUKY_logo.jpg?ex=65592e95&is=6546b995&hm=0620b2bea2396aa0a3522cc396f86cd857d9b5cbcbe979f3acd3aeb8d6f04264&=',
        serverJoinDate: 'Lundi 03 Octobre 2022',
        betaJoinDate: '01/10/2023'
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

