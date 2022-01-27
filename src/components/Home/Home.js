import React, { useEffect, useState } from 'react';
import { getDishes } from '../../services/items';
import { ItemsContainer } from '../ItemsContainer/ItemsContainer';

export const Home = () => {
  const [dishes, setDishes] = useState('')
  const data = [
    {
      id: 0,
      title: 'Cauliflower, Brown Rice',
      image: 'pic1'
    },
    {
      id: 2,
      title: 'Homemade Garlic and',
      image: 'pic2'
    },
    {
      id: 3,
      title: 'Berry Banana Breakfast',
      image: 'pic3'
    },
    {
      id: 4,
      title: 'Garlicky Kale',
      image: 'pic4'
    }
  ]

  useEffect(() => {
    getDishes()
      .then((res) => {
        setDishes(res);
      })
      .catch((error) => {
      })
  }, []);

  return (
    <>
      <ItemsContainer dishes={data}/>
    </>
  )
};
