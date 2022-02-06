import React, { useState } from 'react';
import swal from 'sweetalert';
import { getDishes, searchDishes, getDish } from '../services/items';

const MenuContext = React.createContext();

const useMenu = () => {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useOnAddToMenu must be used within an AddProvider');
  }
  return context;
};

const MenuProvider = ({children}) => {
  const [menu, setMenu] = useState([]);
  const [dishesList, setDishesList] = useState([]);
  const [dish, setDish] = useState([]);
  
  console.log('menu :>> ', menu);

  if (menu.length >= 5) {
    swal(
      '¡El menú esta COMPLETO!',
      'Para cambiar un plato, debe eliminar al menos un plato del menú'
    );
    menu.splice(4,1);
  }

  const searchDishesByQuery = (query) => {
    searchDishes(query)
      .then((res) => {
        setDishesList(res);
      })
  }

  const getDishesList = () => {
    getDishes()
      .then((res) => {
        setDishesList(res);
      })
  }

  const getDishById = (id) => {
    getDish(id)
      .then((res) => {
        setDish(res);
      })
  }

  const onAddToMenu = (dish) => {
    let isANewDish = true;

    menu.forEach((element) => {
      if (element.id === dish.id) {
        isANewDish = false;
      }
    });

    if (!isANewDish) {
      return;
    }

    const newDish = {
      id: dish.id,
      title: dish.title,
      image: dish.image,
      vegan: dish.vegan,
      vegetarian: dish.vegetarian,
      celiac: dish.glutenFree,
      price: dish.pricePerServing,
      timePreparation: dish.readyInMinutes,
      healthScore: dish.healthScore,
      summary: dish.summary
    }
    console.log('agregue un nuevo plato :>> ',  newDish);
    setMenu((previousState) => [...previousState, newDish]);
  };

  const removeDish = (id) => {
    const newMenu = menu.filter((dish) => dish.id !== id)
    setMenu(newMenu);
   }

  return (
    <>
      <MenuContext.Provider value={{
        onAddToMenu,
        menu,
        removeDish,
        dishesList,
        getDishesList,
        searchDishesByQuery,
        getDishById,
        dish,
        }}>
        {children}
      </MenuContext.Provider>
    </>
  )

}

export { useMenu, MenuProvider, MenuContext}