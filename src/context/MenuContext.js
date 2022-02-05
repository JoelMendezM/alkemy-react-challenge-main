import React, { useState } from 'react';
import swal from 'sweetalert';
import { getDishes, searchDishes } from '../services/items';

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
  const [averagePrice, setAveragePrice] = useState(0);
  
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

  const averageMenuPrice = () => {
    let menuPrice = 0;
    let quantityItems = 0;
      menuPrice = menu.map((item) => {
        console.log('item.price :>> ', item.price);
        quantityItems = quantityItems + 1;
        menuPrice = menuPrice + item.price;
        let average = menuPrice / quantityItems;
        console.log('average :>> ', average);

      return average
    })
  }
  const averageMenuPreparation = () => {
    let menuTimePreparation = 0;
    let quantityItems = 0;
    menuTimePreparation = menu.map((item) => {
        console.log('item.price :>> ', item.timePreparation);
        quantityItems = quantityItems + 1;
        menuTimePreparation = menuTimePreparation + item.timePreparation;
        let average = menuTimePreparation / quantityItems;
        console.log('average :>> ', average);

      return average
    })
  }
  const averageMenuHealthScore = () => {
    let menuHealthScore = 0;
    let quantityItems = 0;
      menuHealthScore = menu.map((item) => {
        quantityItems = quantityItems + 1;
        menuHealthScore = menuHealthScore + item.healthScore;
        let average = menuHealthScore / quantityItems;
        console.log('average :>> ', average);

      return average
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
        averageMenuPrice,
        averageMenuPreparation,
        averageMenuHealthScore
        }}>
        {children}
      </MenuContext.Provider>
    </>
  )

}

export { useMenu, MenuProvider, MenuContext}