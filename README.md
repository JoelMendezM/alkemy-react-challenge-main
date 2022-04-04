# Alkemy Challenge - Menu Creator App

The challenge-project it is based on a menu creator app for hotels, you can choose at least 4 options from a dishes list and compare differences averages: price, health score and time preparation 
## Login required

#### Obtain a token access with the body request:
##### Email: challenge@alkemy.org
##### Password: react


```http
  POST http://challenge-react.alkemy.org/
```

## API Reference

https://spoonacular.com/food-api/docs#Search-Recipes-Complex

#### Get all dishes with a recipe information

```http
  GET https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64&addRecipeInformation=true
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **e5efa520d806449eb6185b9de8fdcf64** |

#### Search dishes

```http
  GET https://api.spoonacular.com/recipes/complexSearch?apiKey=e5efa520d806449eb6185b9de8fdcf64&addRecipeInformation=true&query=${query}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Query parameter to fetch**. |

#### Get dish by Id

```http
  GET https://api.spoonacular.com/recipes/${id}/information?apiKey=e5efa520d806449eb6185b9de8fdcf64&includeNutrition=false
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Id parameter to fetch** |


## Packages installed

These are all packages used into the project


```bash
  react, react-router-dom, axios, formik, classnames, styled-components, sweetalert
```
    
## Deployment

To deploy the project you should have installed node Js and execute the code below:

```bash
  npm run start
```

## Services usage (items.js)

```javascript
"item.js" contain the calls API like a functions, the created functions are:

- getDishes()       - searchDishes(query = '')       - getDish(id)

These functions are used in the context
```

## Feedback

If you have any feedback about this project, please let me know and then I will improve it. You can send me an email to: 
joel.j.mendez.m@gmail.com

## 🚀 About Me
I'm a front-end developer working every day to be magnificent developer and will never stop untill get it (infinity loop)...

Take a look to my github repository: https://github.com/JoelMendezM

If you have any comment, advice, critic or something else, please do not hesitate to contact me at:
joel.j.mendez.m@gmail.com

