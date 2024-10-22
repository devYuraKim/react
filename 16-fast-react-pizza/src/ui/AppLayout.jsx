import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  //loading indicator using useNavigation()
  //do not confuse with useNavigate()
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        {/* this is where the child components from the router will be displayed*/}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
