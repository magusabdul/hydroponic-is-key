const Articles = {
    async render() {
      return `
      <section class="blogs" id="blogs">

      <h1 class="heading"> our daily posts </h1>
  
      <div class="swiper blogs-slider">
  
          <div class="swiper-wrapper">
  
              <div class="swiper-slide slide">
                  <img src="img/article1.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article2.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article3.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article4.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article5.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article6.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
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
        var swiper = new Swiper(".blogs-slider", {
            loop:true, 
            grabCursor:true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
            },
        });
      } catch (err) {
        main.style.display = 'block';
        console.log(err);       
      }
    },
  };
  
  export default Articles;