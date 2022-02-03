import React from 'react';
import { useMenu } from '../../context/MenuContext';
import { DishesContainer, CardDish, Button } from '../StyleComponents/Style';
import className from 'classnames';

export const Item = ( {dishes, appearButton = {'d-none': false}, disapeartButton = {'d-none': true}} ) => {
  const { onAddToMenu, removeDish } = useMenu();

  const wraperrClassesDetailButton = className('btn btn-primary', disapeartButton);
  const wraperrClassesDeleteButton = className('btn btn-danger', disapeartButton);
  const wraperrClassesAddMenuButton = className('btn btn-primary', appearButton);

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
                  <Button className={wraperrClassesDetailButton}>Detalle del plato</Button>
                  <Button className={wraperrClassesDeleteButton} onClick={() => removeDish()}>Eliminar</Button>
                  <Button className={wraperrClassesAddMenuButton} onClick={() => onAddToMenu(dishes)}>Añadir al menú</Button>
                </div>
              </CardDish>
            </div>
          ))
          }
    </DishesContainer>
    </>
  )
};

