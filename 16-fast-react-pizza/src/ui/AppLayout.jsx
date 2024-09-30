import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </>
  );
}

export default AppLayout;
