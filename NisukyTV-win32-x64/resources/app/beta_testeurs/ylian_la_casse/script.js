new Vue({
    el: '#app',
    data: {
        darkMode: false,
        accountName: 'YLIAN lA CASSE',
        profileIconUrl: 'https://images-ext-2.discordapp.net/external/OZ1zIYrPgNMK4yvQh4zMh0SCg8NVYfAvgYnJnWqtyaw/%3Fsize%3D128/https/cdn.discordapp.com/avatars/775735270490243102/70698ca79ea1295f64cc4df8abd036d0.png',
        roles: [
            { name: 'Abonné', color: '#2ECC71'},
            { name: 'Bêta Testeur NisukyTV', color:'#E74C3C'},
            { name: 'Annonces', color: '#997126'}            

            // Ajoutez d'autres rôles ici
        ],
        rolesUpdatedAt: '05/11/2023',
        accountId: '775735270490243102',
        serverIconUrl: 'https://media.discordapp.net/attachments/1170464750195441754/1170476925253337088/NISUKY_logo.jpg?ex=65592e95&is=6546b995&hm=0620b2bea2396aa0a3522cc396f86cd857d9b5cbcbe979f3acd3aeb8d6f04264&=',
        serverJoinDate: 'Dimanche 15 Octobre 2023',
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

