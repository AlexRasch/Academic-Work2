import React from "react";

export function Item(props) {
  return (
    <div className="card mb-5">
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
    </div>
  );
}
