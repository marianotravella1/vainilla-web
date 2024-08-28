const themeButton = document.getElementById('theme');
        const themeIcon = document.getElementById('theme-icon');

        // guarda el tema para mantenerlo en toda la navegacion
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);

        // cambia la imagen del botón según el tema
        if (savedTheme === 'dark') {
            themeIcon.src = './images/dark-theme.jpg';
        } else {
            themeIcon.src = './images/light-theme.png';
        }

        // cambia entre temas al hacer click
        themeButton.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.body.setAttribute('data-theme', newTheme);
            
            // guarda el nuevo tema en localStorage
            localStorage.setItem('theme', newTheme);

            // cambia el ícono del botón según el tema
            if (newTheme === 'dark') {
                themeIcon.src = './images/dark-theme.jpg';
            } else {
                themeIcon.src = './images/light-theme.png';
            }
        });