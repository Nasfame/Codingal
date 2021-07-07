import './App.css'
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './images/logo.jpeg'
import EndClass from "./components/EndClass"
import Timer from "./components/Timer"

const Navbar = () => {
    return (
        <header>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossOrigin="anonymous"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
                    integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
                    crossOrigin="anonymous"></script>

            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
                    integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
                    crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                  integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                  crossOrigin="anonymous"/>
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-light p-0">
                <div className="container-fluid p-0">
                    <div className="navbar-logo border-light p-3" style={{height: "4rem"}}>
                        <img className="img-responsive" src={logo} alt="logo"/>
                    </div>
                    <div className="navbar-Heading navbar-brand p-3">
                        <b>
                            <a className="nav-link disabled pt-2 d-none d-md-block" href="#">Trial Lesson [Grade
                                1-3] </a>
                            <label className="h2 d-md-none">Codingal</label>
                        </b>
                    </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarHamburger">
                            <i className="fas fa-bars"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarHamburger">
                            <ul className="nav navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <b><a className="nav-link" href="#">Posts</a></b>
                                </li>
                                <li className="nav-item">
                                    <Timer className="navbar-Timer"/>
                                </li>
                                <li className="nav-item">
                                    <EndClass className="navbar-EndClass"/>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </header>

)
}


const App = () =>
    {
        return (
            <Navbar/>
        )
    }

export default App