import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";

function App() {
  return (
    <>
      {/* <p>constant element</p> */}

      <BrowserRouter>
        {/* <PageNav /> */}

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<p>COUNTRIES</p>} />
            <Route path="form" element={<p>FORM</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
