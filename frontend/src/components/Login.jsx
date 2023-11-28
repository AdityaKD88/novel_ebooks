import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';

const LoginScheme = Yup.object().shape({
  email: Yup.string().required('Emial is required').email('Invalid Email'),
  password: Yup.string().required('Enter password'),
});

const Login = () => {

  const navigate = useNavigate();
  const {setLoggedIn} = useAppContext();

  const loginForm = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
  
    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(res.status === 200){

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);

        resetForm()

        enqueueSnackbar('Login Success', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
        navigate('/')
      }else if(res.status === 401){
        enqueueSnackbar('Wrong email or password', {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      }
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
              <input type="password" className='form-control mb-3' id='password' onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button type='submit' className='btn btn-primary mt-3'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login