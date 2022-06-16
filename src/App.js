import "./App.css";
import React, { useState} from "react";

function ShoppingList(props) {

  // Lets create a XSS :) 

  //ToDo change to local storage
  const shoppingList2 = props.list.map((x) => <li className="list-group-item" key={x.id}>{x.name} {x.price}</li>);
  return <ul className="list-group"> <li className="list-group-item active">Shop</li>{shoppingList2}</ul>;
}


function Item(props) {
  return (
    <div className="card-body item">
      <img className="card-img-top mx-auto d-block" src={props.image} width="100" alt=""></img>
      <h3 className="card-title">{props.name}</h3>
      <p className="card-text">
        {props.name} <b>Pris:</b> <i>{props.price}</i>
      </p>
      <button type="button"  className="card-link btn btn-primary addButton" onClick={() => props.handleAdd(props)}>
        Add item
      </button>
      <button type="button" className="card-link btn btn-warning removeButton" onClick={() => props.handleRemove(props)}>
        Remove item
      </button>
    </div>
  );
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
   setShoppingList((prevState) =>[
    ...prevState,
    {id: prevState.length + 1, name: item.name, price: item.price}
    //item.name + " " + item.price
  ]);
  }
  return (
    <div className="App">
    <div className="row">
    <div className="col-sm-12 col-md-6 mt-5 pt-5">
      <ShoppingList list = {shoppingList} />
    </div>
    <div className="col-sm-12 col-md-6 mt-5 pt-5">
      
    <div className="card mb-5">
      <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Banana"
        price={30}
        handleAdd = {addItem}
        handleRemove = {removeItem}
        
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
    <div className="card mb-5">
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    </div>
      {/* <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="banana"
        price={30}
      />
      <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="banana"
        price={30}
      />
      <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="potatis"
        price={30}
      /> */}
      </div>
      </div>
    </div>
  );
}

export default App;
