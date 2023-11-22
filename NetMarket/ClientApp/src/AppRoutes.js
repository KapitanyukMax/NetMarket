import { Home } from "./components/Home";
import ProductListPage from "./components/ProductsListPage";
import Cart from "./components/Cart";
import Category from "./components/Categories";
import AddProduct from "./components/AddProduct";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/products',
    element: <ProductListPage/>
  },
  {
    path: '/addProduct',
    element: <AddProduct/>
  }
];

export default AppRoutes;
