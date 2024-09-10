import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <p>constant element</p>

      <BrowserRouter>
        <PageNav />

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />}>
            <Route
              path="cities"
              element={<p>CITIES COMPONENT WILL BE RENDERED HERE</p>}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
