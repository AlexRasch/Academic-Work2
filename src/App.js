import "./App.css";
import React, { useState } from "react";

// Import "routes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ShoppingList } from "./components/ShoppingList";
import { Header, NavBar } from "./components/Header";
import { Item } from "./components/Item";

function FooterBackToTop() {
  return (
    <div>
      <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
    </div>
  )
}



function App() {

  const [shoppingList, setShoppingList] = useState([]);

  const [items, setItems] = useState([
    {
      image: 'assets/img/ananas.jpg',
      name: 'Ananas',
      price: 10
    },
    {
      image: 'assets/img/apelsin.jpg',
      name: 'Apelsin',
      price: 11
    },
    {
      image: 'assets/img/aprikos.jpg',
      name: 'Aprikos',
      price: 20
    },
    {
      image: 'assets/img/bannan.jpg',
      name: 'Banan',
      price: 21
    },
    {
      image: 'assets/img/carambola.jpg',
      name: 'Carambola',
      price: 22
    },
    {

      image: 'assets/img/cherimoya.jpg',
      name: 'Cherimoya',
      price: 23
    },
    {
      image: 'assets/img/citron.jpg',
      name: 'Citron',
      price: 24
    },
    {
      image: 'assets/img/clementin.jpg',
      name: 'Clementin',
      price: 25
    },
    {
      image: 'assets/img/granatapple.jpg',
      name: 'Granatäpple',
      price: 26
    },
    {
      image: 'assets/img/grapefrukt.jpg',
      name: 'Grapefrukt',
      price: 27
    },
    {
      image: 'assets/img/apple.jpg',
      name: 'Äpple',
      price: 27
    }
  ])

  const itemsElement = items.map(item =>
    <Item
      image={item.image}
      name={item.name}
      price={item.price}
      handleAdd={addItem}
      handleRemove={removeItem}
    />
  );

  function removeItem(item) {

    // ToDo improve logic

    //console.log("Remove: " + item.name);
    var array = [...shoppingList]; // make a separate copy of the array
    //console.log(array, item)
    let idToRemove = array.filter(i => i.name === item.name).slice(-1)[0].id
    //console.log(idToRemove)
    var index = array.indexOf(array.filter(i => i.id === idToRemove)[0])
    //console.log(index)
    if (index !== -1) {
      array.splice(index, 1);
      setShoppingList(array);
    }

  }
  function addItem(item) {
    //ToDo improve generation of keys
    //console.log("Add: " + item);
    setShoppingList((prevState) => [
      ...prevState,
      { id: prevState.length + 1, name: item.name, price: item.price }
      //item.name + " " + item.price
    ]);
  }
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-5 pt-5">
            <ShoppingList list={shoppingList} />
          </div>
          <div className="col-sm-12 col-md-6 mt-5 pt-5">

            {itemsElement}


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
