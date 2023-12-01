import React from 'react'
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { enqueueSnackbar } from 'notistack';

const SignupScheme = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(3, 'Too short'),
  email: Yup.string().required('Email is required').email('Invalid Email'),
  mobile: Yup.string().required('Mobile number is required').length(10, 'Invalid number'),
  password: Yup.string().required('Enter password').min(6, 'Too short').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter and one digit'
  ),
  cpassword: Yup.string().required('Enter confirm password').oneOf(
    [Yup.ref('password'), null], 'Password does not match')
});

const Signup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues:{
      name: '',
      email: '',
      mobile: '',
      password: '',
      cpassword: ''
    },
  
    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);
      if(res.status === 200){
        resetForm()
        enqueueSnackbar('Registration Successful', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
        navigate('/login')
      }else{
        enqueueSnackbar('Something went Wrong', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    },
  
    validationSchema: SignupScheme
  });

  return (
    <div className='vh-100 py-5 bg-signup'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card shadow-lg">
          <div className="card-header" style={{backgroundColor: '#0d1b2a'}}>
            <h2 className="text-center text-white my-4"><i class="fas fa-user-shield"></i>&nbsp;
            Sign Up</h2>
          </div>
          <div className="card-body" style={{backgroundColor: '#eff6e0'}}>

            <form onSubmit={signupForm.handleSubmit}>
              <label>Full Name</label>
              <span className="error-label">{signupForm.touched.name && signupForm.errors.name}</span>
              <input type="text" className='form-control mb-3' id='name' onChange={signupForm.handleChange} value={signupForm.values.name} />
              <label>Email</label>
              <span className="error-label">{signupForm.touched.email && signupForm.errors.email}</span>
              <input type="email" className='form-control mb-3' id='email' onChange={signupForm.handleChange} value={signupForm.values.email} />
              <label>Mobile Number</label>
              <span className="error-label">{signupForm.touched.mobile && signupForm.errors.mobile}</span>
              <input type="text" className='form-control mb-3' id='mobile' onChange={signupForm.handleChange} value={signupForm.values.mobile} />
              <label>Password</label>
              <span className="error-label">{signupForm.touched.password && signupForm.errors.password}</span>
              <input type="password" className='form-control mb-3' id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />
              <label>Confirm Password</label>
              <span className="error-label">{signupForm.touched.cpassword && signupForm.errors.cpassword}</span>
              <input type="password" className='form-control mb-3' id='cpassword' onChange={signupForm.handleChange} value={signupForm.values.cpassword} />

              <button type='submit' className='btn btn-primary mt-3'>Sign Up</button>
            </form>
          </div>
          <div class="card-footer" style={{backgroundColor: '#0d1b2a'}}>
            <Link class="btn btn-info" to="/login">Already have account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup