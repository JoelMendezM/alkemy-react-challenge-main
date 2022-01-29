import axios from 'axios';

//
export async function getDishes() {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64&addRecipeInformation=true'
    );
    console.log('data', response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function searchDishes(query = '') {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64&addRecipeInformation=true&query=${query}`
    );
    console.log('data', response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
