import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavigationBar from "./components/NavigationsBar.jsx";
import HomePage from "./Page/HomePage";
import ProductsPage from "./Page/ProductPage";
import ProductDetailPage from "./Page/ProductDetailPage";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
