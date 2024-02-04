import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/Product-Details";
import { ProductListing } from "./pages/Product-Listing";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Practice</h1>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
