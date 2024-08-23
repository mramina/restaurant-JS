import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';
import './style.css';

function App() {
    this.init = function() {
        homePage();
    };

    function attachEventListeners() {
        const homeButton = document.getElementById('home');
        const menuButton = document.getElementById('menu');
        const contactButton = document.getElementById('contact');


        homeButton.addEventListener('click', (event) => {
            console.log('homeButton', event.target);
            homePage();
        });

        menuButton.addEventListener('click', (event) => {
            console.log('menuButton', event.target);
            menuPage();
        });

        contactButton.addEventListener('click', (event) => {
            console.log('contactButton', event.target);
            contactPage();
        });
    }

    this.attachEventListeners = attachEventListeners;
}

const app = new App();
app.init();
app.attachEventListeners();