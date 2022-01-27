import axios from 'axios';

//
export async function getDishes() {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64'
    );
    console.log(response.data.results, 'response');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
