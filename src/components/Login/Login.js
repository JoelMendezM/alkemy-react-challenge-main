import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
import { Spinner, Container } from '../StyleComponents/Style'
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [processingLogin, setProcessingLogin] = useState(false);

  const handleLogin = () => {
    setProcessingLogin(true);
    //
      axios
        .post('http://challenge-react.alkemy.org/', {
          email: email,
          password: password,
        })
        .then(function (response) {
          localStorage.setItem('token', response.data.token);
          navigate('/');

        })
        .catch(function (error) {
          if (!(email === 'challenge@alkemy.org') && !(password === 'react')) {
            swal(
              '¡ERROR! email y/o password inválido',
              'Por favor introduzca el email y/o password correctamente'
            );
          }
          setProcessingLogin(false);
        })
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
              <Container>
                <button type="submit" className="btn btn-primary" disabled={processingLogin}>
                  Enviar
                </button>
                {processingLogin && <Spinner className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>}
              </Container>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};
