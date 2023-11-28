import React from 'react'

const Home = () => {
  return (
    <div className=''>

      <header className="bg-dark text-white">
        <div className="container">
          <h1 className="text-center">Read a thousand books and your words will flow like a river</h1>
          <h5 className="text-center">
            - Virginia Woolf
          </h5>
          <div className="text-center">
            <button className="my-btn">More Info</button>
          </div>
        </div>
      </header>

      <div className="container py-5 text-center">
        <h2>Browse Genres</h2>
        <div className="row py-4 d-flex align-items-center justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://escapetoromance.com/wp-content/uploads/sites/172/2017/05/iStock-503130452.jpg"
              />
              <div className="card-body">
                <h5>Romance</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://gamingbolt.com/wp-content/uploads/2018/06/Devil-May-Cry-5-7.jpg"
              />
              <div className="card-body">
                <h5>Action & Adventure</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://lh3.googleusercontent.com/oaRjpqoFUwy11oDIR8HskXX_4qG8Itt59PlzfIhYlooNzuNGOh7lLghXFn1ljXGr9h1aAoiT2SOd=w1440-ns-nd-rj"
              />
              <div className="card-body">
                <h5>Mystery & Thriller</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://viewthroughmywindow.com/wp-content/uploads/2021/10/biography-400x300.jpeg"
              />
              <div className="card-body">
                <h5>Biographies & History</h5>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row py-4 d-flex align-items-center justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://www.epm.org/static/cache/71/ef/71ef90ebd0a51c9d1e974622aa802f7b.jpg"
              />
              <div className="card-body">
                <h5>Children's</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://assets3.thrillist.com/v1/image/2709563/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
              />
              <div className="card-body">
                <h5>Horror</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://img.freepik.com/free-photo/open-book-concept-fiction-storytelling-fairytale_23-2150793765.jpg"
              />
              <div className="card-body">
                <h5>Fantasy</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img"
                src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/thumbnail/s3/legacy-images/Building%20A%20Better%20Sci-Fi%20Game/scifi610.jpg"
              />
              <div className="card-body">
                <h5>Science Fiction</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home