// import {Link} from 'react-router-dom'

import {IoCloseCircle} from 'react-icons/io5'

import './index.css'

export default function Header() {
  return (
    <>
      <div className="header-container">
        <nav className="nav-bar">
          <h1 className="header-logo">
            COVID19<span className="header-span">INDIA</span>
          </h1>
          <button className="menu-button" type="button">
            <img
              className="menu-icon"
              alt="menu"
              src="https://res.cloudinary.com/dfddyuqkb/image/upload/v1684469959/add-to-queue_1_1x-sm_zfcp42.png"
            />
          </button>
          <div className="home-about-container">
            <p className="home">Home</p>
            <p className="about">About</p>
          </div>
        </nav>
      </div>
      <div className="menu-container">
        <div>
          <p className="home">Home</p>
          <p className="about">About</p>
        </div>
        <IoCloseCircle className="close-icon" />
      </div>
    </>
  )
}
