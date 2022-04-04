import React, { useState } from 'react';
import { Formik } from 'formik';

export const DishesSearch = () => {
  const [searching, setSearching] = useState('')

  return (
    <>
      <Formik
        initialValues={{searchValue: searching}}
      >
        {({handleChange, handleSubmit})=> {
          <div>
            <form onSubmit={handleSubmit}>
              <label className='form-label'>Buscador de platos</label>
              <input
              type='text'
              id='searching'
              onChange={handleChange}/>
              {console.log(searching)}
            </form>
          </div>
        }}
      </Formik>
    </>
  )
};

 
