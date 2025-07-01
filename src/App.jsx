import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { SingleMovie } from "./pages/SingleMovie";
import { ErrorPage } from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div className="w-full font-Poppins">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
