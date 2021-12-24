class HeroApp extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
              <div class="hero">
                  <div tabindex="0" class="hero__inner">
                      <h1 class="hero__title">Selamat Datang di <b>Hydroponic Is Key</b></h1>
                      <p class="hero__tagline">
                            Bangun Indonesia lebih sehat dan kreatif bersama kami!
                      </p>
                      <a href="#container" class="btn-content">Start now!</a>
                  </div>
              </div>
          `;
    }
}
  
customElements.define('hero-app', HeroApp);