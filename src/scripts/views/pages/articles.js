const Articles = {
    async render() {
      return `
      <section class="services">
        <h1 class="heading"> Articles for you </h1>
        <div class="box-container">

            <div class="box">
                <img src="img/article1.jpg" alt="">
                <h3>complete guide</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article2.jpg" alt="">
                <h3>custom packages</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article3.jpg" alt="">
                <h3>family trips</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article4.jpg" alt="">
                <h3>train guides</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article5.jpg" alt="">
                <h3>adventure trail</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article6.jpg" alt="">
                <h3>various adventures</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                <a href="#" class="btn">read more</a>
            </div>
            
        </div>

    </section>
        `;
    },
  
    async afterRender() {
      const main = document.querySelector('#main-content');
      main.style.display = 'none';
      try {
        main.style.display = 'block';
        
      } catch (err) {
        main.style.display = 'block';
        console.log(err);       
      }
    },
  };
  
  export default Articles;