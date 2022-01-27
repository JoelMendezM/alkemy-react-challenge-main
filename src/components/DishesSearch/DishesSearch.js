import React, { useState } from 'react';
import { Formik } from 'formik';
import { SearchFormContainer } from '../StyleComponents/Style';
import { getDishes } from '../../services/items'
import { Item } from '../Item/Item'
import { Home } from '../Home/Home'

export const DishesSearch = () => {
  const [foundDishes, setFoundDishes] = useState([]);
  const data = [
      {
        id: 0,
        title: 'Cauliflower, Brown Rice',
        image: 'pic1'
      },
      {
        id: 2,
        title: 'Homemade Garlic and',
        image: 'pic2'
      },
      {
        id: 3,
        title: 'Berry Banana Breakfast',
        image: 'pic3'
      },
      {
        id: 4,
        title: 'Garlicky Kale',
        image: 'pic4'
      }
    ]

  return (
    <>
      <Formik
        initialValues={{searchValue: ''}}
        validate={(inputValue) => {
          
          if(inputValue.searchValue.length >= 2) {
              let test = [];
                
                console.log('searchingTest :>> ', inputValue.searchValue);

                test = data.filter((match) => {
                  if (match.title.toLowerCase().includes(inputValue.searchValue)) {
                    test.push(match);
                  }
                    return setFoundDishes(test);
                })
            }

            /*if(inputValue.searchValue.length > 1) {
                getDishes()
                .then((response) => {
                    console.log('response :>> ', response);
                })
            }*/
            


        }}
      >
        {({handleChange, handleSubmit, values})=> (
          <div>
            <SearchFormContainer onSubmit={handleSubmit}>
              <label className='form-label'>Buscador de platos</label>
              <input
              type='text'
              id='searching'
              name='searchValue'
              value={values.searchValue}
              onChange={handleChange}/>
            </SearchFormContainer>

            {values.searchValue.length >= 2 ?
              <Item dishes={foundDishes}/> :
              <Home />
            }
          </div>
        )}
      </Formik>
    </>
  )
};