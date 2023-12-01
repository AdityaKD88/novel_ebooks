import React, { useEffect, useState } from 'react'

const Books = () => {

    const [bookList, setBookList] = useState([])
    const [selBook, setSelBook] = useState([])

    const fetchBookData = async () => {
        const res = await fetch('http://localhost:5000/novel/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setBookList(data);
    };

    useEffect(() => {
      fetchBookData();
    }, [])
    
    const viewModel = () => {
        return(
            <>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Book Details
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    </div>

                    <div className="modal-body">{
                        selBook != null && (
                            <div>
                                <h2>Title: {selBook.title}</h2>
                                <h4>Author: {selBook.author}</h4>
                                <h4>Price: {selBook.price}</h4>
                                <h6>Uploaded By: {selBook.uploadedby}</h6>
                            </div>
                        )
                    }</div>

                    <div className="modal-footer">
                    <a href={"http://localhost:5000/"+selBook.book} target='_blank'>
                    <button
                        type="button"
                        className="btn btn-primary"
                    >
                        Read Now
                    </button>
                    </a>
                    
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </>

        )
    }

  return (
    <div className='books-bg'>
        {viewModel()}

        <div className="container py-3">
            <h2 className="text-center">E-Books</h2>
            <hr />
            <div className="row py-4 gy-4 d-flex align-items-center justify-content-center">

            {
            bookList.map((book) => (
                <div className="col-md-2">
                    <div className="card mycard">
                        <img
                            height={280}
                            src={"http://localhost:5000/"+book.coverphoto} alt=""
                        />
                        <div className="card-body py-auto">
                            <h5>{book.title}</h5>

                            {/* Button trigger modal */}
                            <button
                                onClick={() => {setSelBook(book)}}
                                type="button"
                                className="btn btn-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            ))
            }
                    
            </div>
        </div>

    </div>
  )
}

export default Books