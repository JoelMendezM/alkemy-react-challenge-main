import React from 'react';
import { NavLink } from 'react-router-dom';
import { DishesContainer, CardDish } from '../StyleComponents/Style';

export const Item = ( {dishes} ) => {
  return (
    <>
      <DishesContainer>
      {dishes && dishes.length > 0 && dishes.map((dishes) => (
        <div key={dishes.id}>
          <CardDish className="card" style={{width: "18rem"}}>
            <img src={dishes.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{dishes.title}</h5>
              <NavLink to="/home" className="btn btn-primary">Añadir al menú</NavLink>
            </div>
          </CardDish>
        </div>
      ))
    }
    </DishesContainer>
    </>
  )
};

