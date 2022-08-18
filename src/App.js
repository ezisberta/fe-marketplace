import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllItems from "./Routed/AllItems";
import BasketPage from "./Routed/BasketPage";
import CreateUser from "./Routed/CreateUser";
import ItemPage from "./Routed/ItemPage";
import ItemCategories from "./Routed/ItemCategories";
import SellPage from "./Routed/SellPage";
import SellerProfile from "./Routed/SellerProfile";
import UserListings from "./Routed/UserListings";
import UserProfile from "./Routed/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="tittle">Our Marketplace</h1>
        </header>
        <Routes>
          <Route path="/AllItems" element={<AllItems />} />
          <Route path="/BasketPage" element={<BasketPage />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/ItemPage" element={<ItemPage />} />
          <Route path="/ItemCategories" element={<ItemCategories />} />
          <Route path="/SellPage" element={<SellPage />} />
          <Route path="/SellerProfile" element={<SellerProfile />} />
          <Route path="/UserListings" element={<UserListings />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
