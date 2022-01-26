import React, { useState } from 'react';
import { Formik } from 'formik';
import { SearchFormContainer } from '../StyleComponents/Style';

export const DishesSearch = () => {
  const [searching, setSearching] = useState('')

  return (
    <>
      <Formik
        initialValues={{searchValue: ''}}
        
      >
        {({handleChange, handleSubmit, values})=> (
          <div>
            <SearchFormContainer onSubmit={handleSubmit}>
              <label className='form-label'>Buscador de platos</label>
              <input
              type='text'
              id='searchingValue'
              name='searchValue'
              value={values.searchValue}
              onChange={handleChange}/>
            </SearchFormContainer>
            {console.log('searchValue :>> ', values.searchValue)}
          </div>
        )}
      </Formik>
    </>
  )
};

 
