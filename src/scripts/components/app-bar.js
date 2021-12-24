class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="header">
            <a href="#/" class="logo"><img src="../icons/layer2.svg"></a>
            <nav class="navbar">
                <div id="nav-close" class="fas fa-times"></div>
                <a href="#/home">home</a>
                <a href="#/articles">Articles</a>
                <a href="#/products">Products</a>
                <a href="#/about">about</a>
            </nav>

            <div class="icons">
                <div id="menu-btn" class="fas fa-bars"></div>
                <a href="#" class="fas fa-shopping-cart"></a>
                <div id="search-btn" class="fas fa-search"></div>
            </div>
        </header>

        <!-- search form  -->
        <div class="search-form">
            <div id="close-search" class="fas fa-times"></div>
            <form action="">
                <input type="search" name="" placeholder="search here..." id="search-box">
                <label for="search-box" class="fas fa-search"></label>
            </form>
        </div>
        `;
    }
}

customElements.define('app-bar', AppBar);