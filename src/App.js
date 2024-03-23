import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Reservations from "./pages/Reservations/Reservations";

const App = () => {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
