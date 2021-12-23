const Products = {
    async render() {
      return `
      <section class="shop" id="shop">

      <h1 class="heading">featured products</h1>
  
      <div class="swiper product-slider">
  
          <div class="swiper-wrapper">
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Paket Hidroponik Fullset 18 Lubang.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="images/product-3.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="images/product-4.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="images/product-5.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="images/product-6.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
          </div>
  
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
  
      </div>
  
  </section>
        `;
    },
  
    async afterRender() {
      const main = document.querySelector('#main-content');
      main.style.display = 'none';
      try {
        main.style.display = 'block';
        var swiper = new Swiper(".product-slider", {
            loop:true, 
            grabCursor:true,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
            },
        });        
      } catch (err) {
        main.style.display = 'block';
        console.log(err);
      }
    },
  };
  
  export default Products;