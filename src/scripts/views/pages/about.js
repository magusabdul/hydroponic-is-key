const About = {
    async render() {
      return `
        <section class="about" id="about">
            <div class="image">
                <img src="icons/layer2.svg" alt="">
            </div>
        
            <div class="content">
                <h3>memorable outdoor experiences</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
                <a href="#" class="btn">read more</a>
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
  
  export default About;