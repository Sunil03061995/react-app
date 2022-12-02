import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} href="#">{props.Title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" to="/">Home</Link> */}
              <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" to="/about">{props.AboutText}</Link>
            </li> */}
            
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}

          <div className="d-flex">
              <div className="rounded bg-danger mx-1" onClick={()=>{props.toggleMode('danger')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
              <div className="rounded bg-warning mx-1" onClick={()=>{props.toggleMode('warning')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
              <div className="rounded bg-success mx-1" onClick={()=>{props.toggleMode('success')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
              <div className="rounded bg-info mx-1" onClick={()=>{props.toggleMode('info')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
              <div className="rounded bg-dark mx-1" onClick={()=>{props.toggleMode('dark')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
              <div className="rounded bg-light mx-1" onClick={()=>{props.toggleMode('light')}} style={{height:'25px', width:'25px', cursor:'pointer' , border:'1px solid black'}}></div>
          </div>

           {/* toggle with radio buttons  */}
          {/* <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label">Toggle Mode</label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

// Specifies the prop types as a string:
Navbar.propTypes = { Title: PropTypes.string.isRequired,
                     AboutText: PropTypes.string.isRequired}

// Specifies the default values for props:
Navbar.defaultProps = {
    Title: 'Sunil K',
    AboutText: 'About Me'
  };
  
