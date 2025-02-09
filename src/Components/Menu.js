import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import TypesMenu from "./TypesMenu";
import ReactLoading from 'react-loading';
import Card from "./Card";
import Header from "../Header";
import styles from "../Style/Menu.module.css";
const Menu = () => {
	const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");

  const getProducts = useCallback(() => {
		axios.get('http://localhost:3477/Products').then((response) => {
      setProducts(response.data);
    })
	}, [products])


	useEffect(() => {
		getProducts();
	}, []);


  const handleCurrTypeState = (type) => {
    setCurrType(type);
  };

  const currentElements = products.filter(p => {
    if (currType === "All Menu") return p;
    if (currType === p.type) return p;
    return null;;
  });

  const chooseExtras = (productId, ExtraId) => {

    console.log("productId: ", productId)
    let currentProduct = products.find(p => p.id === productId);

    // create change in the product object extras array
    const currentExtras = currentProduct.Extras.map(e => {
      if (e.id === ExtraId) {
        e.isActive = !e.isActive;
      }
      return e;
    });

    currentProduct = {...currentProduct, Extras: currentExtras};
    console.log(currentProduct);

    const newProducts = products.map(p => {
      if (p.id === productId) {
        p = currentProduct;
      }
      return p;
    });
    setProducts(newProducts);
  }
  
  const divDisplay = currentElements.map((p) => {
    return (
      <Card product={p} key={p.id} handleExtras={chooseExtras}/>
    )
  });

  return (
    <div className={styles.mainMenu}>
    {
      products.length === 0 ?
      <div>
        <ReactLoading type='spin' color='#E8BA25' height={'100%'} width={'100%'} />
        <h1>Loading...</h1>
      </div>
      :
      <div>
        <Header />
        <TypesMenu typeSetState={handleCurrTypeState} />
        <div className={styles.menuContainer}>
          {divDisplay}
        </div>
      </div>
    }
    </div>
  );
};

export default Menu