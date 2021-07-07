import './App.css'
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './images/logo.jpeg'
import Modal from "./components/Modal"
import Timer from "./components/Timer"

const Test = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid d-flex">
                    <div className="navbar-logo border-light p-2" style={{height:"3rem"}}>
                        <img className="img-responsive" src={logo} alt="logo"/>
                    </div>
                    <div className="header-Heading p-3">
                        <label className="p text-dark strong pt-2 d-none d-md-block">Trial Lesson [Grade
                            1-3] </label>
                        <label className="h2 d-md-none">Codingal</label>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarHamburger"
                        aria-controls="navbarHamburger"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarHamburger">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#">Posts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}


const App = () => {
    return (
        <Test/>
    )
}

export default App