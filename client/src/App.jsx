import React from "react";
import "./App.css";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3005";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
