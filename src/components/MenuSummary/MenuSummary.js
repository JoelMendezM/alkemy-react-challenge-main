import React from 'react';
import { useMenu } from '../../context/MenuContext'

export const MenuSummary = () => {
  const { averageMenuPrice } = useMenu();

  averageMenuPrice();

  return (
    <>
      <div>
        <p>Precio total del menú: {}</p>
        <p>Promedio de preparación en minutos: {}</p>
        <p>Promedio de health score: {}</p>
      </div>
    </>
  )
}

