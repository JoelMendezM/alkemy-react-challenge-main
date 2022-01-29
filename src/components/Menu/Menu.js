import React from 'react';
import { MenuContainer } from '../StyleComponents/Style';
import { useMenu } from '../../context/MenuContext';
import { Item } from '../Item/Item';

export const Menu = () => {
  const { menu } = useMenu();

  return (

    <MenuContainer>
      {menu.length === 0 ?
      <>
        <h1>MENU:</h1>
        <div>
          <h4>"El menú esta vacío"</h4>
        </div>
      </> :
      <>
        <h1>MENU:</h1>
        <Item dishes={menu} key={menu.id}/>
      </>
    }
    </MenuContainer>

  ) 
};

