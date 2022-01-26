import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(false);
  const [processingLogin, setProcessingLogin] = useState(false);

  const handleLogin = () => {
    setProcessingLogin(true);
    //

    setTimeout(() => {
      axios
        .post('http://challenge-react.alkemy.org/', {
          email: email,
          password: password,
        })
        .then(function (response) {
          localStorage.setItem('token', response.data.token);
          console.log(response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          if (!(email === 'challenge@alkemy.org') && !(password === 'react')) {
            swal(
              '¡ERROR! email y/o password inválido',
              'Por favor introduzca el email y/o password correctamente'
            );
          }
          setProcessingLogin(false);
        });
    }, 2500);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(inputValue) => {
          let inputErrors = {};

          //Email validation
          if (!inputValue.email) {
            inputErrors.email = 'Campo "Email" no puede estar vacío por favor escriba un correo';
          } else if (inputValue.email === 'challenge@alkemy.org') {
            setEmail(inputValue.email);
          }

          //Password validation
          if (!inputValue.password) {
            inputErrors.password =
              'Campo "Password" no puede estar vacío por favor escriba una contraseña';
          } else if (inputValue.password === 'react') {
            setPassword(inputValue.password);
          }

          return inputErrors;
        }}
        onSubmit={(inputValues, { resetForm }) => {
          resetForm();
          handleLogin();

          console.log('formulario enviado');
          console.log('password', password);
          console.log('email', email);
        }}>
        {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
          <>
            <div style={{ margin: '1.5rem' }}>
              <p>
                Para poder ingresar a nuestra web es necesario que ingrese un email y contraseña
                autorizado
              </p>
            </div>
            <form className="container" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  placeholder="challenge@alkemy.org"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {touched.email && errors.email && <div>{errors.email}</div>}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  value={values.password}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {touched.password && errors.password && <div>{errors.password}</div>}
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              {processingLogin && <div>Procesando petición, aguarde un momento por favor</div>}
            </form>
          </>
        )}
      </Formik>
    </>
  );
};
