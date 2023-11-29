import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <h4>Newsletter</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo
                commodi aliquid totam. Eos atque quibusdam quisquam qui!
              </p>
              <input className="" type="text" placeholder="newsletter" />
              <button htmlFor="when">Go</button>
            </div>
            <div className="col-md-2">
              <h4>Social Media</h4>
              <h6 className="mb-3">
                <i className="fa-brands fa-facebook" />
                <a href="" className="text-white no_underline">
                  Facebook
                </a>
              </h6>
              <h6 className="mb-3">
                <i className="fa-brands fa-instagram" />
                <a href="" className="text-white no_underline">
                  Instagram
                </a>
              </h6>
              <h6 className="mb-3">
                <i className="fa-brands fa-youtube" />
                <a href="" className="text-white no_underline">
                  YouTube
                </a>
              </h6>
              <h6 className="mb-3">
                <i className="fa-brands fa-twitter" />
                <a href="" className="text-white no_underline">
                  Twitter
                </a>
              </h6>
              <h6 className="mb-3">
                <i className="fa-brands fa-threads" />
                <a href="" className="text-white no_underline">
                  Threads
                </a>
              </h6>
            </div>
            <div className="col-md-5 d-flex flex-column">
              <h4>Address</h4>
              <h6 className="mb-3">
                <i className="fa-solid fa-house" />
                <span>Shop No.8 Gurunanak Market Chowk Gurgoun</span>
              </h6>
              <h6 className="mb-3">
                <i className="fa-regular fa-envelope" />
                <a href="" className="text-white no_underline">
                  {" "}
                  info@novelnebula.com
                </a>
              </h6>
              <h6 className="mb-3">
                <i className="fa-solid fa-square-phone" />
                <span>+91 9876543210</span>
              </h6>
              <h6 className="mb-3">
                <i className="fa-brands fa-chrome" />
                <a href="" className="text-white no_underline">
                  {" "}
                  www.novelnebula.com
                </a>
              </h6>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center mx-5 py-2 d-flex justify-content-between">
            <h4>© NovelNebula 2023 All Rights Reserved</h4>
            <h5>Terms - Privacy</h5>
        </div>
        </footer>
    </div>
  )
}

export default Footer