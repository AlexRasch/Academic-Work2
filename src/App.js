import "./App.css";
import React, { useState} from "react";

function ShoppingList(props) {
  //ToDo change to local storage
  const shoppingList2 = props.list.map((x) => <li>{x}</li>);
  return <ul>{shoppingList2}</ul>;
}


function Item(props) {
  return (
    <div className="item">
      <img src={props.image} width="100" alt=""></img>
      <p>
        {props.name} {props.price}
      </p>
      <button className="addButton" onClick={() => props.handleAdd(props)}>
        Add item
      </button>
      <button className="removeButton" onClick={() => props.handleRemove(props)}>
        Remove item
      </button>
    </div>
  );
}

function App() {
  
  const [shoppingList, setShoppingList] = useState([]);
  function removeItem() {}
  function addItem(item) {
console.log(item)
    // setShoppingList
    // console.table(event.target);
  }
  return (
    <div className="App">
      <ShoppingList list = {shoppingList} />
      <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="banana"
        price={30}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
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
  );
}

export default App;
