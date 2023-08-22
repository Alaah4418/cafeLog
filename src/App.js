import { useContext, useEffect, useState } from "react";
import Menu from "./Components/Menu";
import AddProduct from "./Components/AddProduct";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { FaBeer } from "react-icons/fa";
import styles from "../src/Style/App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Router } from "react-router";
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("Peter");

  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/" element={<favourites />} />
            <Route path="/Card" element={<card />} />
            {/* <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Setting" element={<Setting />} /> */}
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
};

export default App;
