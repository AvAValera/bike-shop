import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./layout/root-layout/RootLayout";
import LoginRegisterPage from "./pages/login-register-page/LoginRegisterPage";
import ProductItemPage from "./pages/product-item/ProductItemPage";
import NotFound from "./pages/not-found/NotFound";
import CategoryPage from "./pages/category/CategoryPage";


function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/user/auth" index element={<LoginRegisterPage />} />
          <Route path="/category/:cat" element={<CategoryPage />} />
          <Route path="/item/:id" element={<ProductItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
