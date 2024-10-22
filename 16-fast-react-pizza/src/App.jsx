import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

//data fetching/loading react-router: createBrowserRouter
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:orderId", element: <Order /> },
]);

function App() {
  //renders the elements based on the path defined in the router
  return <RouterProvider router={router} />;
}

export default App;
