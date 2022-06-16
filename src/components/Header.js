import React from "react";

export function NavBar() {

  return (
    /* .sticky-top will not work if it is inside any container */
    <div className="sticky-top">
      <nav classID="" className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
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
    </div>
  );
}
export function Header() {
  return (
    <div className="p-5 bg-success text-white text-center">
      <h1>Fruit Shopper 2000</h1>
      <p>Maecenas dignissim in dui eu imperdiet</p>
    </div>
  );
}
