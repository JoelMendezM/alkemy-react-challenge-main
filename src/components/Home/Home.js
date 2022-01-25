import React, { useEffect, useState } from 'react';
import { getDishes } from '../../services/items';
import { ItemsContainer } from '../ItemsContainer/ItemsContainer';

export const Home = () => {
  const [dishes, setDishes] = useState('')

  useEffect(() => {
    getDishes()
      .then((res) => {
        setDishes(res);
        console.log(res, 'res')
      
      })
      .catch((error) => {
        //MANEJAR ERROR
      })
  }, []);

  return (
    <>
      <ItemsContainer dishes={dishes}/>
    </>
  )
};
