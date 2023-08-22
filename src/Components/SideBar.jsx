import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { BsFillGearFill } from "react-icons/bs";
import styles from "../Style/SideBar.module.css";
import { NavLink } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineHeart,
  AiOutlineCoffee,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

const SideBar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ()=> {
    return setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <GoHomeFill />
    },
    {
      path: "/Menu",
      name: "Menu",
      icon: <AiOutlineCoffee />
    },
    {
      path: "/Favourites",
      name: "Favourites",
      icon: <AiOutlineHeart />
    },
    {
      path: "/Card",
      name: "Card",
      icon: <AiOutlineShoppingCart />
    },
    {
      path: "/About",
      name: "About",
      icon: <AiOutlineQuestionCircle />
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: <AiOutlinePhone />
    },
    {
      path: "/Setting",
      name: "Setting",
      icon: <BsFillGearFill />
    }
  ];
  return (
    <div className={styles.container}>
      <div style={{width: isOpen ? "250px" : "50px"}} className={styles.sidebar}>
        <div style={{marginRight: isOpen ? "150px" : "0px" }} className={styles.bars}>
          <GiHamburgerMenu
            className={styles.icons}
            onClick={ toggle }/>
        </div>
        {
            menuItem.map((item,index)=>(
              <NavLink to={item.path} key={index} 
                className={styles.link} activeclassName={styles.active}>
                    <div className={styles.icon}>{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className={styles.linkText}>{item.name}</div>
                </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
