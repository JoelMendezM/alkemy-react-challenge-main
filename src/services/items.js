import axios from 'axios';

//
export async function getDishes() {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=bab401f1a68946959bb8cd42dba16eda'
    );
    console.log(response.data.results, 'cl1');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
