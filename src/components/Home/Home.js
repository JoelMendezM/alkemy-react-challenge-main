import React, { useEffect } from 'react';
import { ItemsContainer } from '../ItemsContainer/ItemsContainer';
import { Instructions } from '../Instructions/Instructions';
import { Menu } from '../Menu/Menu';
import { DishesSearch } from '../DishesSearch/DishesSearch';
import { useMenu } from '../../context/MenuContext';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const { getDishesList, dishesList } = useMenu();
  const isUserLogged = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if(!isUserLogged) {
      navigate('/login');
    }

    getDishesList();
  }, []);
  

  return (
    <>
       <Instructions />
       <Menu/>
       <h1 style={{margin: "1rem"}}>Platos disponibles:</h1>
      <DishesSearch/>
      {dishesList.length >= 1 && <ItemsContainer dishes={dishesList}/>}
    </>
  )
};
