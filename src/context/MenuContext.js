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
        console.log('res :>> ', res);
        setDish(res);
      })
  }

  const onAddToMenu = (dishes) => {
    const dishAddToMenu = {
        id: dishes.id,
        title: dishes.title,
        image: dishes.image,
        vegan: dishes.vegan,
        vegetarian: dishes.vegetarian,
        celiac: dishes.glutenFree,
        price: dishes.pricePerServing,
        timePreparation: dishes.readyInMinutes,
        healthScore: dishes.healthScore,
        summary: dishes.summary
      }

    setMenu((previousState) => [...previousState, dishAddToMenu]);
  }

  const removeDish = (index) => {
    menu.splice(index, 1);

    let updatingMenu = menu.map((dish) => {
      return {...dish}
    })
    setMenu(updatingMenu);
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
        dish
        }}>
        {children}
      </MenuContext.Provider>
    </>
  )

}

export { useMenu, MenuProvider, MenuContext}