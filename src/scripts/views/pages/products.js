const Products = {
    async render() {
      return `
      <section class="packages" id="packages">

        <h1 class="heading">Our Products</h1>

        <div class="box-container">

            <div class="box">
                <div class="image">
                    <img src="img/Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">Rp17.400</div>
                    <a href="https://tokopedia.link/uVECIjvAfmb" class="btn">Buy now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/Paket Hidroponik Fullset 18 Lubang.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Paket Hidroponik Fullset 18 Lubang</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">Rp449.000</div>
                    <a href="https://tokopedia.link/2ZxN76pAfmb" class="btn">Buy now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/PAKET PEMULA DENGAN POMPA HIDROPONIK TOWER VERTIKULTUR 16 LUB.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Rockwool Cultilene Media Tanam Hidroponik asli Import per slab</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">Rp185.000</div>
                    <a href="https://tokopedia.link/q3RPsieAfmb" class="btn">Buy now</a>
                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/Rockwool Cultilene Media Tanam Hidroponik asli Import per slab.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">Rp77.000</div>
                    <a href="https://tokopedia.link/ahvTcqlAfmb" class="btn">Buy now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/Gully talang kotak hidroponik aquaponik dg tutup atas tanpa lubang.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Paket Hidroponik Fullset 18 Lubang</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">Rp33.300</div>
                    <a href="https://tokopedia.link/HsCMctWzfmb" class="btn">Buy now</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/Dutch Bucket Hidroponik 8L, 2 Netpot Hitam 10cm.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Rockwool Cultilene Media Tanam Hidroponik asli Import per slab</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                    <div class="price">Rp24.000</div>
                    <a href="https://tokopedia.link/M52dWb6zfmb" class="btn">Buy now</a>
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