import { Home } from "./components/Home";
import ProductListPage from "./components/ProductsListPage";
import Cart from "./components/Cart";
import Category from "./components/Categories";
import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";

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
  },
  {
    path: '/addUser',
    element: <AddUser/>
  }
];

export default AppRoutes;
