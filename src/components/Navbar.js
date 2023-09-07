import React from 'react'

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg  border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand me-"  href="https://www.isro.gov.in">Indian Space Research Organisation</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <button className="btn btn-outline-danger" type="submit"> <a href="/">Log out</a></button>
      </form>
    </div>
  </div>
</nav>

  )
}
