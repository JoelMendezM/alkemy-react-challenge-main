import React from 'react';
import { useMenu } from '../../context/MenuContext';
import { DishesContainer, CardDish, Button } from '../StyleComponents/Style';
import className from 'classnames';
import { NavLink } from 'react-router-dom';

export const Item = ( {
  dishes, 
  appearButton = {'d-none': false},
  disapeartButton = {'d-none': true},
  disapearParagrah = {'d-none': false}
  } ) => {
  const { onAddToMenu, removeDish } = useMenu();
  const wraperParagrah = className(disapearParagrah);
  const wraperrClassesDetailButton = className('btn btn-primary', disapeartButton);
  const wraperrClassesDeleteButton = className('btn btn-danger', disapeartButton);
  const wraperrClassesAddMenuButton = className('btn btn-primary', appearButton);

  return (
    <>
      <DishesContainer>
          {dishes && dishes.length > 0 && dishes.map((dish) => (
            <div key={dish.id}>
              <CardDish className="card" style={{width: "18rem"}}>
                <img src={dish.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{dish.title}</h5>
                  <p className={wraperParagrah}><b>Precio por porción: </b>{dish.pricePerServing}</p>
                  <p className={wraperParagrah}><b>Tiempo de preparación (min): </b>{dish.readyInMinutes}</p>
                  <p className={wraperParagrah}><b>Health Score: </b>{dish.healthScore}</p>
                  <p className="card-text"><b>Apto vegano: </b>{dish.vegan === true ? 'si' : 'no'}</p>
                  <p className="card-text"><b>Vegetariano: </b>{dish.vegetarian === true ? 'si' : 'no'}</p>
                  <p className="card-text"><b>Apto celíaco: </b>{dish.glutenFree === true ? 'si' : 'no'}</p>
                  <NavLink to={`/item/detail/${dish.id}`} className={wraperrClassesDetailButton} >Detalle del plato</NavLink>
                  <Button className={wraperrClassesDeleteButton} onClick={() => removeDish(dish.id)}>Eliminar</Button>
                  <Button className={wraperrClassesAddMenuButton} onClick={() => onAddToMenu(dish)}>Añadir al menú</Button>
                </div>
              </CardDish>
            </div>
          ))
          }
    </DishesContainer>
    </>
  )
};

