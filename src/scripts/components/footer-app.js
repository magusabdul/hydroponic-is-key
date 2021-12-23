class FooterApp extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>quick links</h3>
                <a href="/home">home</a>                
                <a href="/articles">articles</a>
                <a href="/products">products</a>
                <a href="/about">about</a>
            </div>

            <div class="box">
                <h3>extra links</h3>
                <a href="#">my account</a>
                <a href="#">my order</a>
                <a href="#">my wishlist</a>
                <a href="#">ask questions</a>
                <a href="#">terms of use</a>
                <a href="#">privacy policy</a>
            </div>

            <div class="box">
                <h3>contact info</h3>
                <a href="#"> <i class="fas fa-phone"></i> +62-831-7530-8665 </a>
                <a href="#"> <i class="fas fa-envelope"></i> magusabdul@gmail.com </a>
                <a href="#"> <i class="fas fa-map"></i> Bandung, Indonesia - 400104 </a>
            </div>

            <div class="box">
                <h3>follow us</h3>
                <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                <a href="#"> <i class="fab fa-github"></i> github </a>
            </div>

        </div>

        <div class="credit">created by <span>Gus Abdul</span> | all rights reserved!</div>

    </section>
        `;
    }
}
  
customElements.define('footer-app', FooterApp);