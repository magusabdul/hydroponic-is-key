import About from '../views/pages/about';
import Articles from '../views/pages/articles';
import Home from '../views/pages/home';
import Products from '../views/pages/products';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/articles': Articles,
  '/products': Products,
  '/about': About,
};

export default routes;
