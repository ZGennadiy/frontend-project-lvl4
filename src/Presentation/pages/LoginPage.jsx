import React from 'react';
import {
  ErrorMessage, Field, Form, Formik, useFormik,
} from 'formik';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { apiClient, apiRoutes } from '../../api';
import PAGES_ROUTES from './pagesRoutes.js';
import customHooks from '../../hooks';

const validationSchema = yup.object({
  nickName: yup
    .string('Enter your nickName')
    .min(2, 'Too Short!')
    .required('Nick Name is required'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
});

function LoginPage() {
  const { useAuth } = customHooks;

  const location = useLocation();
  const navigate = useNavigate();

  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      nickName: '',
      password: '',
    },
    onSubmit: async ({ nickName, password }) => {
      const { data } = await apiClient.post(
        apiRoutes.loginPath(),
        { username: nickName, password },
      );

      auth.logIn(data);

      const { from } = location.state || { from: { pathname: PAGES_ROUTES.main } };

      navigate(from, { replace: true });
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm p-4">
            <h1>Sign in</h1>
            <Formik
              initialValues={formik.initialValues}
              validationSchema={validationSchema}
              onSubmit={formik.handleSubmit}
            >
              <Form onChange={formik.handleChange} className="d-flex flex-column align-item-center">
                <div className="d-flex flex-column mt-2">
                  <label htmlFor="nickName">Nick Name</label>
                  <Field
                    id="nickName"
                    name="nickName"
                    placeholder="JohnWick1974"
                    className="form-control"
                    autoFocus
                  />
                  <ErrorMessage component="p" name="nickName" className="invalid-feedback d-block" />
                </div>
                <div className="d-flex flex-column mt-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage component="p" name="password" className="invalid-feedback d-block" />
                </div>
                <Button variant="outline-primary" className="mt-4 mb-4" type="submit">Sign in</Button>
              </Form>

            </Formik>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
