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
//loader function is executed BEFORE rendering
//cf) useEffect renders first then fetches data
const router = createBrowserRouter([
  //without a path attribute and with a children attribute, this acts as a layout component(layout route)
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      //2.provide the loader function to the menu route
      //loader: a "function" that fetches data from an API
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

function App() {
  //renders the elements based on the path defined in the router
  return <RouterProvider router={router} />;
}

export default App;
