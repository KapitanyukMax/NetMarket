import { Home } from "./components/Home";
import ProductListPage from "./components/ProductsListPage";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";
import LogIn from "./components/LogIn";

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
    path: '/categories/all',
    element: <Categories />
  },
  {
      path: '/products/all',
    element: <ProductListPage/>
  },
  {
    path: '/addProduct',
    element: <AddProduct/>
  },
  {
    path: '/addUser',
    element: <AddUser/>
  },
  {
    path: '/logIn',
    element : <LogIn/>
  }
];

export default AppRoutes;
