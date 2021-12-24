const Products = {
    async render() {
      return `
      <section class="packages" id="packages">

        <h1 class="heading">popular packages</h1>

        <div class="box-container">

            <div class="box">
                <div class="image">
                    <img src="img/Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter.jpg" alt="">
                </div>
                <div class="content">
                    <h3>featured tour package</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">$250 - $450</div>
                    <a href="#" class="btn">Buy now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/Paket Hidroponik Fullset 18 Lubang.jpg" alt="">
                </div>
                <div class="content">
                    <h3>featured tour package</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">$250 - $450</div>
                    <a href="#" class="btn">Buy now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/Rockwool Cultilene Media Tanam Hidroponik asli Import per slab.jpg" alt="">
                </div>
                <div class="content">
                    <h3>featured tour package</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">$250 - $450</div>
                    <a href="#" class="btn">Buy now</a>
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
        
      } catch (err) {
        main.style.display = 'block';
        console.log(err);
      }
    },
  };
  
  export default Products;