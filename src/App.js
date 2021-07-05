import './App.css'
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './images/logo.jpeg'
import Modal from "./components/Modal"
import Timer from "./components/Timer"

//Navbar doesnt support Hamburger icon
const Header = () => {
    return (
        <header
            className="header d-flex header-light text-dark sticky-top">
            <div className="header-logo border-light py-3 px-3">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header-Heading p-3">
                <label className="p text-dark strong pt-2 d-none d-md-block">Trial Lesson [Grade
                    1-3] </label>
                <label className="h2 d-md-none">Codingal</label>
            </div>
            <div className="header-Ending d-flex justify-content-flex-end p-3">
                <Timer className="header-Ending-Timer p"/>
                <div className="header-Ending-EndClass align-content-center">
                    <button type="button" className="btn btn-danger text-color-light text-nowrap text-white-50"
                            data-bs-toggle="modal"
                            data-bs-target="#endClassModal" data-content="">End class
                    </button>
                    <Modal/>
                </div>
            </div>
        </header>
    )
}


const App = () => {

    return (
        <div>
            <Header/>
        </div>
    )
}

export default App


const Toggler = () => {
    {/*<div className="header-components collapse">*/
    }
    {/*    <div className="bg-light shadow-3 p-4">*/
    }
    {/*    */
    }
    {/*</div>*/
    }
    {/*</div>*/
    }
    {/*position-absolute end-0*/
    }
    {/*                    <button className="header-toggler ms-auto bg-dark collapsed" type="button" data-mdb-toggle="collapse"*/
    }
    {/*                            data-toggle="collapse"  data-mdb-target=".header-components" aria-controls="header-components"*/
    }
    {/*                            aria-expanded="false" aria-label="Toggle navigation" style={{outlineColor:"white"}}>*/
    }
    {/*>*/
    }
    {/*                    </button>*/
    }
}


//
