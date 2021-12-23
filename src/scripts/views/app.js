import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this.initiator_button = button;
    this.initiator_drawer = drawer;
    this.initiator_content = content;

    this.initiator_initialAppShell();
  }

  initiator_initialAppShell() {
    DrawerInitiator.init({
      button: this.initiator_button,
      drawer: this.initiator_drawer,
      content: this.initiator_content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    let navbar = document.querySelector('.header .navbar');
    
    document.querySelector('#menu-btn').onclick = () =>{
      navbar.classList.add('active');
    }
    document.querySelector('#nav-close').onclick = () =>{
      navbar.classList.remove('active');
    }
    
    let searchForm = document.querySelector('.search-form');
    
    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.add('active');
    }
    
    document.querySelector('#close-search').onclick = () =>{
        searchForm.classList.remove('active');
    }
    
    this.initiator_content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
