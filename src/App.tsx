import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./layout/root-layout/RootLayout";
import LoginRegisterPage from "./pages/login-register-page/LoginRegisterPage";
import ProductItemPage from "./pages/product-item/ProductItemPage";


function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/user/auth" index element={<LoginRegisterPage />} />
          <Route path="/item/:id" element={<ProductItemPage />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
