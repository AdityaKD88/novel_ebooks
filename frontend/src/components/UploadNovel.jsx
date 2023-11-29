import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import * as Yup from 'yup';
import toast from "react-hot-toast";

const uploadNovelSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author Name is required').min(3, 'Too short'),
  price: Yup.string().required('Price is required')
});

const UploadNovel = () => {

  const [selCover, setSelCover] = useState('');
  const [selBook, setSelBook] = useState('');

  const uploadNovelForm = useFormik({
    initialValues:{
      title: '',
      author: '',
      price: ''
    },

    onSubmit: async (values, {resetForm}) => {
      values.coverphoto = selCover;
      values.book = selBook;
      console.log(values);
      const res = await fetch('http://localhost:5000/novel/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      
      if(res.status === 200){
        resetForm()
        enqueueSnackbar('Uploaded Successfully', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      }else{
        enqueueSnackbar('Something went wrong...', {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      }
    },

    validationSchema: uploadNovelSchema
  })

  const uploadCover = async (e) => {
    const cover = e.target.files[0];
    const coverdata = new FormData();
    setSelCover(cover.name);

    coverdata.append('mycover', cover);

    const res = await fetch('http://localhost:5000/util/uploadcover', {
      method: 'POST',
      body: coverdata
    });

    console.log(res.status);
    if(res.status === 200){
      toast.success('Cover Uploaded Successfully')
    }
  }

  const uploadBook = async (e) => {
    const book = e.target.files[0];
    const bookdata = new FormData();
    setSelBook(book.name);

    bookdata.append('mybook', book);

    const res = await fetch('http://localhost:5000/util/uploadbook', {
      method: 'POST',
      body: bookdata
    });

    console.log(res.status);
    if(res.status === 200){
      toast.success('Book Uploaded Successfully')
    }
  }

  return (
    <div className='vh-100 upload-novel-bg'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center my-5">Upload Novel</h2>

            <form onSubmit={uploadNovelForm.handleSubmit}>
              <label>Title</label>
              <span className="error-label">{uploadNovelForm.touched.title && uploadNovelForm.errors.title}</span>
              <input type="text" className='form-control mb-3' id='title' onChange={uploadNovelForm.handleChange} value={uploadNovelForm.values.title} />
              <label>Author</label>
              <span className="error-label">{uploadNovelForm.touched.author && uploadNovelForm.errors.author}</span>
              <input type="text" className='form-control mb-3' id='author' onChange={uploadNovelForm.handleChange} value={uploadNovelForm.values.author} />
              <label>Price</label>
              <span className="error-label">{uploadNovelForm.touched.price && uploadNovelForm.errors.price}</span>
              <input type="text" className='form-control mb-3' id='price' onChange={uploadNovelForm.handleChange} value={uploadNovelForm.values.price} />

              <label>Upload Cover</label>
              <input type="file" className='form-control mb-3' onChange={uploadCover} id='coverPhoto' />
              <label>Upload Book</label>
              <input type="file" className='form-control mb-3' onChange={uploadBook} id='book' />

              <button type='submit' className="btn btn-primary mt-3">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadNovel