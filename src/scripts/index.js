import 'regenerator-runtime'; /* for async await transpile */;
import '../styles/style.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/footer-app';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu-btn, #nav-close'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

let navbar = document.querySelector('.header .navbar');

window.onscroll = () =>{
  navbar.classList.remove('active');

  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
};

window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
};
