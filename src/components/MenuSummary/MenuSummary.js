import React, { useEffect, useState } from 'react';
import { useMenu } from '../../context/MenuContext';
import { MenuContainer } from '../StyleComponents/Style';


export const MenuSummary = () => {
  const [averagePrice, setAveragePrice] = useState(0);
  const [averageTimePreparation, setAverageTimePreparation] = useState(0);
  const [averageHealthScore, setAverageHealthScore] = useState(0);
  const { menu } = useMenu();

  const averageMenuPrice = () => {
    let menuPrice = 0;

    menu.forEach((item) => {
      menuPrice = menuPrice + item.price;
    })

    let average = menuPrice / menu.length;
        
    setAveragePrice(average);
  }

  const averageMenuPreparation = () => {
    let menuTimePreparation = 0;

    menu.forEach((item) => {
      menuTimePreparation = menuTimePreparation + item.timePreparation;
      })

      let average = menuTimePreparation / menu.length;

      setAverageTimePreparation(average);
  }

  const averageMenuHealthScore = () => {
    let menuHealthScore = 0;

    menu.forEach((item) => {
      menuHealthScore = menuHealthScore + item.healthScore;
      })

    let average = menuHealthScore / menu.length;

    setAverageHealthScore(average);
  }

  useEffect(() => {
    averageMenuPrice();
    averageMenuPreparation();
    averageMenuHealthScore();
  
  },[menu])

  return (
    <>
      {menu.length > 0 && 
      <MenuContainer>
        <p><b>Precio total del menú: </b>{averagePrice.toFixed(2)}</p>
        <p><b>Promedio de preparación en minutos: </b>{averageTimePreparation.toFixed(2)}</p>
        <p><b>Promedio de health score: </b>{averageHealthScore.toFixed(2)}</p>
      </MenuContainer>
      }
    </>
  )
}

