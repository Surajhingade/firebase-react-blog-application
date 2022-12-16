import React from 'react'
import { Link } from 'react-router-dom'
import transitions from 'bootstrap'

const Header = ({user,handleLogout} ) => {
   const userId = user?.uid;
 

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid bg-faded padding-media">
            <div className="container padding-media">
                <nav className="navbar navbar-toggleable-md navbar-light">
                    <button className='navbar-toggler mt-3' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" data-bs-parent="#navbarSupportedContent" aria-controls='navbarSupportedContent' aria-expanded="true" aria-label='Toggle Navigation' >
                        <span className='fa fa-bars' ></span>
                    </button>
                    <div className="collapse navbar-collapse" id='navbarSupportedContent' >
                        <ul className="navbar-nav me-auto mb-2 mb-lg"  >
                            <Link to='/' style={{textDecoration:"none"}} >
                            <li className={`nav-item nav-link  `}  >Home</li>
                            </Link>
                            <Link to="/create"  style={{textDecoration:"none"}} >
                            <li  className={`nav-item nav-link  `}  >Create</li>
                            </Link>
                            <Link to="about"  style={{textDecoration:"none"}} >
                            <li  className={`nav-item nav-link`}   >About</li>
                            </Link>
                        </ul>
                        <div className="row lg-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg"   >
                          {userId ? (
                            <>
                            <div className="profile-logo" >
                              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="logo" style={{width:"30px",height:'30px',borderRadius:'50px', marginTop:'12px'}} />
                            </div>
                            <p style={{marginTop:"12px",marginLeft:'5px'}} >{user?.displayName}</p>
                            <li className="nav-item nav-link " onClick={handleLogout} >Logout</li>
                            </>
                          ):(
                            <Link to="/auth" style={{ textDecoration: "none" }}>
                                <li className={`nav-item nav-link `}   >
                                  Login
                                </li>
                             </Link> 
                          )}
                                              
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Header