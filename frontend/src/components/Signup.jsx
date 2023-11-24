import React from 'react'
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { enqueueSnackbar } from 'notistack';

const SignupScheme = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(3, 'Too short'),
  email: Yup.string().required('Emial is required').email('Invalid Email'),
  mobile: Yup.string().required('Mobile number is required').length(10, 'Invalid number'),
  password: Yup.string().required('Enter password').min(6, 'Too short').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter and one digit'
  ),
  cpassword: Yup.string().required('Enter confirm password')
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
        enqueueSnackbar()
      }
    },
  
    validationSchema: SignupScheme
  });

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center my-5">Sign Up</h2>

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
        </div>
      </div>
    </div>
  )
}

export default Signup