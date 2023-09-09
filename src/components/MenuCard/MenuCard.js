import React from "react";
import "../MenuCard/MenuCard.css";
import {ReactComponent as Check} from "../../assets/check.svg";

export default function MenuCard({ menu }) {
  const { id, name, price, image, toppings, shortDescription } = menu;
   
  return (
    <div className="card w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={id}>
      
      <div className="card_img">
        <img className="h-80 w-72 object-cover rounded-t-xl" src={image} alt={name} /> 
        <div className="price">Price: <span>${price.toFixed(2)}</span></div> 
      </div>
      <div class="px-4 py-3 w-72">
        <h1 className="name text-lg font-bold text-black truncate block capitalize">{name}</h1>
        <div className="text-gray-400 mr-3 uppercase text-xs">{shortDescription}</div>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
          <div className="toppings">
            Toppings:
            {toppings.length ? (
              toppings.map((topping, index) => (
                <p key={index}><i><Check /></i> {topping}</p>
              ))
            ) : (
              <span>{' None '}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}