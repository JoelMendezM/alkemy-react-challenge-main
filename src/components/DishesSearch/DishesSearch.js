import React from 'react';
import { Formik } from 'formik';
import { SearchFormContainer } from '../StyleComponents/Style';
import { useMenu } from '../../context/MenuContext';
import { Label } from '../StyleComponents/Style';

export const DishesSearch = () => {
  const { searchDishesByQuery } = useMenu();

  return (
    <>
      <Formik
        initialValues={{searchValue: ''}}
        
        onSubmit={(values, { resetForm }) => {
          if(values.searchValue.length >= 2) {
            let query = values.searchValue.toLowerCase();
            searchDishesByQuery(query);
          }
          resetForm();
        }}
      >
        {({handleChange, handleSubmit, values})=> (
          <div>
            <SearchFormContainer onSubmit={handleSubmit}>
              <Label className='form-label'>Buscador de platos: </Label>
              <input
              type='text'
              id='searching'
              name='searchValue'
              value={values.searchValue}
              placeholder='ej: Broccoli'
              onChange={handleChange}/>
            </SearchFormContainer>
          </div>
        )}
      </Formik>
    </>
  )
};
