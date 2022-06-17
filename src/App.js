import "./App.css";
import React, { useState} from "react";

function ShoppingList(props) {
  //ToDo change to local storage
  const shoppingList2 = props.list.map((x) => <li key={x.id}>{x.name} {x.price}</li>);
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
  function removeItem(item) {

    // ToDo improve logic
    console.log("Remove: " + item.name);
    var array = [...shoppingList]; // make a separate copy of the array
    console.log(array, item)
    let idToRemove = array.filter(i => i.name === item.name).slice(-1)[0].id
    console.log(idToRemove)
    var index = array.indexOf(array.filter(i => i.id === idToRemove)[0])
    console.log(index)
    if (index !== -1) {
      array.splice(index, 1);
      setShoppingList(array);
    }

  }
  function addItem(item) {
  //ToDo improve generation of keys
  console.log("Add: " + item);
   setShoppingList((prevState) =>[
    ...prevState,
    {id: prevState.length + 1, name: item.name, price: item.price}
    //item.name + " " + item.price
  ]);
  }
  return (
<<<<<<< Updated upstream
    <div className="App">
      <ShoppingList list = {shoppingList} />
      <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="banana"
        price={30}
        handleAdd = {addItem}
        handleRemove = {removeItem}
      />
    <Item
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/375px-Banana-Single.jpg"
        name="Mango"
        price={300}
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
=======
    <Router>
      <div className="App">
        <Header />
        <NavBar  totalItems={shoppingList.length} />
        <div className="container-fluid">
          <Routes>

             {/* Index  / Дом */}
            <Route path="/" element={
              <div className="row">
               
                  {/* Output items/fruits */}
                  {itemsElement}
               
              </div>
            }/>

            {/* Cart  / Корзина покупателя */}
            <Route path="/cart" element={
              <div className="row">
                <div className="col-sm-12 col-md-12 mt-5 pt-5">
                  <ShoppingList list={shoppingList} />
                </div>
              </div>
            }/>

            {/* Checkout */}
            <Route path="/checkout" element={
              <div className="row">
                <div className="col-sm-12 col-md-12 mt-5 pt-5">
                  <img className="rounded mx-auto d-block img-thumbnail img-fluid" src="assets/img/qr-payment.svg"></img>
                  <p className="text-center">Total kostnad: {shoppingList.reduce((total, currentValue) => total = total + currentValue.price, 0)}</p>
                </div>
              </div>
            }/>
          </Routes>
          <a href="#Top"><button type="button" className="btn btn-primary mt-5 mb-2">Top</button></a>
        </div>
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
