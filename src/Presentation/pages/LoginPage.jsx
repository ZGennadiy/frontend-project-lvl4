import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';

const validationSchema = yup.object({
  nickName: yup
    .string('Enter your nickName')
    .min(2, 'Too Short!')
    .required('Nick Name is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

function LoginPage() {
const initialValues = useMemo(() => ({
  nickName: '',
  password: ''
}), [])

const onSubmit = useCallback((values) => {
  console.log('!!!!', values);
}, [])

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm p-4">
            <h1>Sign in</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
                <Form className="d-flex flex-column align-item-center" >
                <div className='d-flex flex-column mt-2'>
                  <label htmlFor="nickName">Nick Name</label>
                  <Field
                    id="nickName"
                    name="nickName"
                    placeholder="JohnWick1974"
                    className='form-control'
                    autoFocus
                    />
                    <ErrorMessage component="p" name="nickName" className="invalid-feedback d-block" />
                </div>
                <div className='d-flex flex-column mt-2'>
                  <label htmlFor="password">Password</label>
                  <Field 
                    id="password"
                    type="password"
                    name="password"
                    className='form-control'
                    />
                    <ErrorMessage component="p" name="password" className="invalid-feedback d-block" />
                </div>
                <Button variant="outline-primary" className='mt-4 mb-4' type="submit">Sign in</Button>
              </Form>
              
              
            </Formik>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
