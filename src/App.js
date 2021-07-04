import './App.css'
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './images/logo.jpeg'
import Modal from "./components/Modal"
import Timer from "./components/Timer"

const Header = () => {
    return (
        <header
            className="header .d-flex  flex-no-wrap justify-content-space-around header-light bg-light text-dark sticky-top">
            <img className="header-logo order-1" src={logo} alt="Logo"/>
            <h2 className="header-Heading strong order-2 d-none d-md-inline d-position-relative ">Trial Lesson [Grade
                1-3] </h2>
            <h2 className="header-Heading strong order-2 d-md-none d-inline d-position-relative">Codingal</h2>
            <div className="header-Ending">
                <Timer/>
                <Modal/>
                <button type="button" className="btn btn-danger order-4 header-endClass" data-bs-toggle="modal"
                        data-bs-target="#endClassModal" data-content="">End class
                </button>
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
