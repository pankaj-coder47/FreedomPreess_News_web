import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg "style={{background: "linear-gradient(121deg, rgba(68,61,75,1) 7%, rgba(0,0,0,0.1) 46%, rgba(10,23,78,1) 100%)"}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand " to="/"><span style={{ color: "#f5d042",background:"#0A174E", borderTopLeftRadius:"10px", paddingLeft:"10px",paddingBottom:"4px"}}>Freedom</span><span style={{ color: "#0A174E" , background:"#f5d042",borderBottomRightRadius:"10px", paddingRight:"10px",paddingBottom:"4px"}}>press</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link  text-light " aria-current="page" to="/">Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link   text-light " to="/business">Bussieness</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link   text-light " to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link   text-light" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  text-light " to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link   text-light" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link   text-light" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  text-light" to="/technology">Technology</Link>
                                </li>
 

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
