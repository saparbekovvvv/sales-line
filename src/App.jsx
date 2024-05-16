import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
  Orders,
  Products,
  Customers,
  Analytics,
  Marketing,
  Integrations,
  MyStore,
  Settiings,
  GetHelp,
  Discounts,
} from "./components/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/myStore" element={<MyStore />} />
      <Route path="/discounts" element={<Discounts />} />
      <Route path="/settings" element={<Settiings />} />
      <Route path="/help" element={<GetHelp />} />
    </Routes>
  );
}

export default App;
