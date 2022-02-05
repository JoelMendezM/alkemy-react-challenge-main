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
<<<<<<< HEAD
  const [averagePrice, setAveragePrice] = useState(0);
=======
  const [dish, setDish] = useState([]);
>>>>>>> a5c2e6398f6e10447b306715da9be4e9b92ab9ef
  
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

<<<<<<< HEAD
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
=======
  const getDishById = (id) => {
    getDish(id)
      .then((res) => {
        setDish(res);
      })
>>>>>>> a5c2e6398f6e10447b306715da9be4e9b92ab9ef
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
<<<<<<< HEAD
        averageMenuPrice,
        averageMenuPreparation,
        averageMenuHealthScore
=======
        getDishById,
        dish
>>>>>>> a5c2e6398f6e10447b306715da9be4e9b92ab9ef
        }}>
        {children}
      </MenuContext.Provider>
    </>
  )

}

export { useMenu, MenuProvider, MenuContext}