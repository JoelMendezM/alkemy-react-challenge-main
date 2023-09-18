import React, { useState } from "react";
import swal from "sweetalert";
import { getDishes, searchDishes, getDish } from "../services/items";

const MenuContext = React.createContext();

const useMenu = () => {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useOnAddToMenu must be used within an AddProvider");
  }
  return context;
};

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [dishesList, setDishesList] = useState([]);
  const [dish, setDish] = useState([]);
  const [veganDishCounting, setVeganDishCounting] = useState(0);
  const [noVeganDishCounting, setNoVeganDishCounting] = useState(0);
  const [isLogged, setIsLogged] = useState(localStorage.length);

  const searchDishesByQuery = (query) => {
    searchDishes(query).then((res) => {
      setDishesList(res);
    });
  };

  const getDishesList = () => {
    getDishes().then((res) => {
      setDishesList(res);
    });
  };

  const getDishById = (id) => {
    getDish(id).then((res) => {
      setDish(res);
    });
  };

  const onAddToMenu = (dish) => {
    let isANewDish = true;
    let isAVeganDish = false;

    menu.forEach((element) => {
      if (element.id === dish.id) {
        swal(
          "¡Este plato ya fue AGREGADO al menu!",
          "Por favor elija una opción diferente"
        );
        isANewDish = false;
      }
    });

    if (!isANewDish) {
      return;
    }

    if (menu.length === 4) {
      swal(
        "¡El menú esta COMPLETO!",
        "Para cambiar un plato, debe eliminar al menos un plato del menú"
      );
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
      summary: dish.summary,
    };

    if (newDish.vegan) {
      setVeganDishCounting(veganDishCounting + 1);
      isAVeganDish = true;
      if (veganDishCounting === 2) {
        swal(
          "¡Solo pueden haber hasta DOS platos VEGANOS en el menu!",
          "Por favor escoja una opción no vegana"
        );
      } else {
        setNoVeganDishCounting(noVeganDishCounting + 1);
        if (noVeganDishCounting === 2) {
          swal(
            "¡Solo pueden haber hasta DOS platos NO VEGANOS en el menu!",
            "Por favor escoja una opción vegana"
          );
        }
      }
    }
    if (veganDishCounting < 2 && isAVeganDish === true) {
      setMenu((previousState) => [...previousState, newDish]);

      return;
    } else if (noVeganDishCounting < 2 && isAVeganDish === false) {
      setMenu((previousState) => [...previousState, newDish]);
    }
  };

  const removeDish = (id) => {
    const newMenu = menu.filter((dish) => dish.id !== id);
    setMenu(newMenu);
  };

  return (
    <>
      <MenuContext.Provider
        value={{
          onAddToMenu,
          menu,
          removeDish,
          dishesList,
          getDishesList,
          searchDishesByQuery,
          getDishById,
          dish,
          isLogged,
          setIsLogged,
        }}
      >
        {children}
      </MenuContext.Provider>
    </>
  );
};

export { useMenu, MenuProvider, MenuContext };
