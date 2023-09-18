import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { Spinner, Container } from "../StyleComponents/Style";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../context/MenuContext";

export const Login = () => {
  const { setIsLogged } = useMenu();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processingLogin, setProcessingLogin] = useState(false);

  const handleLogin = () => {
    setProcessingLogin(true);

    axios
      .post("http://challenge-react.alkemy.org/", {
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        setIsLogged(localStorage.length);
        navigate("/");
      })
      .catch(function (error) {
        if (!(email === "challenge@alkemy.org") && !(password === "react")) {
          swal(
            "¡ERROR! email y/o password inválido",
            "Por favor introduzca un email y/o password autorizado para el login"
          );
        }
        setProcessingLogin(false);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(inputValue) => {
          let inputErrors = {};

          //Email validation
          if (!inputValue.email) {
            inputErrors.email =
              'Campo "Email" no puede estar vacío por favor escriba un correo';
          } else if (inputValue.email === "challenge@alkemy.org") {
            setEmail(inputValue.email);
          }

          //Password validation
          if (!inputValue.password) {
            inputErrors.password =
              'Campo "Password" no puede estar vacío por favor escriba una contraseña';
          } else if (inputValue.password === "react") {
            setPassword(inputValue.password);
          }

          return inputErrors;
        }}
        onSubmit={(inputValues, { resetForm }) => {
          resetForm();
          handleLogin();
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <>
            <div style={{ margin: "1.5rem" }}>
              <p>
                Para poder ingresar a nuestra web es necesario que ingrese un
                email y contraseña autorizado
              </p>
            </div>
            <form className="container" onSubmit={handleSubmit}>
              <div>
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
              {touched.email && errors.email && (
                <p className="m-0 ms-2 text-danger">{errors.email}</p>
              )}
              <div>
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-2"
                >
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
              {touched.password && errors.password && (
                <p className="m-0 ms-2 text-danger">{errors.password}</p>
              )}
              <Container>
                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  disabled={processingLogin}
                >
                  Enviar
                </button>
                {processingLogin && (
                  <Spinner className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Container>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};
