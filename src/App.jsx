import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;
