import React from 'react'

const FooterComponent = () => {
  return (
    <div>
      <footer className="d-flex py-5">
        <div className="col mb-3">
          <a className="navbar-brand" href="#">Peak Hub</a>
          <p>© 2024</p>
        </div>

        <div className="col mb-3">
          <h5>Explore</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="p-0">Countries</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0">Regions</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0">Cities</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0">Locations</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Locations</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="p-0">Favorites</a></li>
            <li className="nav-item mb-2"><a href="#" className="p-0">Location Lists</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default FooterComponent