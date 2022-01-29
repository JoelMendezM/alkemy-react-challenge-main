import React from 'react';
import { useMenu } from '../../context/MenuContext';
import { DishesContainer, CardDish, Button } from '../StyleComponents/Style';

export const Item = ( {dishes} ) => {
  const { onAddToMenu, removeDish } = useMenu();

  return (
    <>
      <DishesContainer>
          {dishes && dishes.length > 0 && dishes.map((dishes) => (
            <div key={dishes.id}>
              <CardDish className="card" style={{width: "18rem"}}>
                <img src={dishes.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{dishes.title}</h5>
                  <p className="card-text"><b>Apto vegano: </b>{dishes.vengan === true ? 'si' : 'no'}</p>
                  <p className="card-text"><b>Vegetariano: </b>{dishes.vegetarian === true ? 'si' : 'no'}</p>
                  <p className="card-text"><b>Apto celíaco: </b>{dishes.glutenFree === true ? 'si' : 'no'}</p>
                  <Button className="btn btn-primary">Detalle del plato</Button>
                  <Button className="btn btn-danger" onClick={() => removeDish()}>Eliminar</Button>
                  <Button className="btn btn-primary" onClick={() => onAddToMenu(dishes)}>Añadir al menú</Button>
                </div>
              </CardDish>
            </div>
          ))
          }
    </DishesContainer>
    </>
  )
};

