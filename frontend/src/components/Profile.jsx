import { Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const Profile = () => {

  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  

  const fetchUser = async () => {
    const res = await fetch('http://localhost:5000/user/getbyid/'+currentUser._id);
    console.log(res);
    const data = await res.json();
    setUserData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const formSubmit = async (values, {resetForm}) => {
    const res = await fetch('http://localhost:5000/user/update/'+currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    console.log(res.status);

    if(res.status === 200){
      resetForm()
      enqueueSnackbar('User Updated Successfully', {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        }
      })
    }else{
      enqueueSnackbar('Something went Wrong', {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        }
      })
    }
  }

  const displayUpdateForm = () => {
    if(userData != null) {
      return <div className="col-md-4 mx-auto py-5">
        <div className='card'>
          <div className="card-header" style={{backgroundColor: '#0d1b2a'}}>
            <h2 className="text-center text-white my-4">Profile</h2>
          </div>
          <div className="card-body" style={{backgroundColor: '#eff6e0'}}>
            <Formik initialValues={userData} onSubmit={formSubmit}>
              {(signupForm) => (
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
                  <input type="text" className='form-control mb-3' id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />
    
                  <button type='submit' className='btn btn-primary mt-3'>Sign Up</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    }else{
      return <h1 className='text-center text-muted'>Loading...</h1>
    } 
  }

    return (
    <div>
      {displayUpdateForm()}
    </div>
  )
}

export default Profile