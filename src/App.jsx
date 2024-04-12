import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
