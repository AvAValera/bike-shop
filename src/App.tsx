import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./layout/root-layout/RootLayout";
import LoginRegisterPage from "./pages/login-register-page/LoginRegisterPage";


function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/user/auth" index element={<LoginRegisterPage />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
