import { Home } from "./components/Home";
import ProductListPage from "./components/ProductsListPage";
import Cart from "./components/Cart";
import CategoryListPage from "./components/CategoryListPage";
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
    path: '/api/categories/all',
    element: <CategoryListPage />
  },
  {
      path: '/api/products/all',
    element: <ProductListPage/>
  },
  {
    path: '/addProduct',
    element: <AddProduct/>
  },
  {
    path: '/api/accounts/register',
    element: <AddUser/>
  },
  {
    path: '/logIn',
    element : <LogIn/>
  }
];

export default AppRoutes;
