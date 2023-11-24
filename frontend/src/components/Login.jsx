import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginScheme = Yup.object().shape({
  email: Yup.string().required('Emial is required').email('Invalid Email'),
  password: Yup.string().required('Enter password'),
});

const Login = () => {

  const loginForm = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
  
    onSubmit: (values) => {
      console.log(values);
    },
  
    validationSchema: LoginScheme
  });

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center my-5">Login</h2>

            <form onSubmit={loginForm.handleSubmit}>
              <label>Email</label>
              <span className="error-label">{loginForm.touched.email && loginForm.errors.email}</span>
              <input type="email" className='form-control mb-3' id='email' onChange={loginForm.handleChange} value={loginForm.values.email} />
              <label>Password</label>
              <span className="error-label">{loginForm.touched.password && loginForm.errors.password}</span>
              <input type="password" className='form-control mb-3' id='pass' onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button type='submit' className='btn btn-primary mt-3'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login