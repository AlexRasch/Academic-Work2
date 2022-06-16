import "./App.css";
import React, { useState } from "react";

function ShoppingList(props) {

  // Lets create a XSS :) 

  //ToDo change to local storage
  const shoppingList2 = props.list.map((x) => <li className="list-group-item" key={x.id}>{x.name} {x.price}</li>);
  console.log(shoppingList2);

  // Calculate total price
  const TotalPrice = props.list.reduce((total, currentValue) => total = total + currentValue.price,0);


  const shoppingListPrice = shoppingList2.map((x) => x.price);
  return <ul className="list-group"> <li className="list-group-item active">Shop</li>{shoppingList2} <li className="list-group-item">Pris: {TotalPrice}</li></ul>;
}


function Header() {
  return (
    <div>
      <div className="p-5 bg-success text-white text-center">
        <h1>Fruit Shopper 2000</h1>
        <p>Maecenas dignissim in dui eu imperdiet</p>
      </div>
      <nav classID="" className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><button type="button" className="btn btn-light">Cart</button></a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><button type="button" className="btn btn-danger">Check Out</button></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>)
}


function Item(props) {
  return (
    <div className="card-body item">
      <img className="card-img-top mx-auto d-block" loading="lazy" src={props.image} width="100" alt=""></img>
      <h3 className="card-title">{props.name}</h3>
      <p className="card-text">
        {props.name} <b>Pris:</b> <i>{props.price}</i>
      </p>
      <button type="button" className="card-link btn btn-primary addButton" onClick={() => props.handleAdd(props)}>
        Add item
      </button>
      <button type="button" className="card-link btn btn-warning removeButton" onClick={() => props.handleRemove(props)}>
        Remove item
      </button>
    </div>
  );
}

function FooterBackToTop(){
  return (
    <div>
          <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
    </div>


  )

}



function App() {

  const [shoppingList, setShoppingList] = useState([]);
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
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 mt-5 pt-5">
          <ShoppingList list={shoppingList} />
        </div>
        <div className="col-sm-12 col-md-6 mt-5 pt-5">

          <div className="card mb-5">
            <Item
              image="assets/img/ananas.jpg"
              name="Ananas"
              price={10}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/apelsin.jpg"
              name="Apelsin"
              price={11}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/aprikos.jpg"
              name="Aprikos"
              price={20}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/bannan.jpg"
              name="Banan"
              price={21}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/carambola.jpg"
              name="Carambola"
              price={22}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/cherimoya.jpg"
              name="Cherimoya"
              price={23}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/citron.jpg"
              name="Citron"
              price={24}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/clementin.jpg"
              name="Clementin"
              price={25}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/granatapple.jpg"
              name="Granatäpple"
              price={26}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/grapefrukt.jpg"
              name="Grapefrukt"
              price={27}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
          </div>
          <div className="card mb-5">
            <Item
              image="assets/img/apple.jpg"
              name="Äpple"
              price={27}
              handleAdd={addItem}
              handleRemove={removeItem}
            />
            </div>
          </div>

        </div>
      </div>
    
    </div>
  );
}

export default App;
