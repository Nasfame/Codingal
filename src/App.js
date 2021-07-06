import './App.css'
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import logo from './images/logo.jpeg'
import Modal from "./components/Modal"
import Timer from "./components/Timer"

const Navbar = () => {
    return (
        <header className="header d-flex">
            <div className="header-logo p-3 border-light">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header-Heading p-3">
                    <label className="p text-dark strong d-none d-md-block">Trial Lesson [Grade
                        1-3] </label>
                    <label className="h2 d-md-none">Codingal</label>
                </div>
            <div className="navbar navbar-collapse collapse navbar-responsive-collapse justify-content-end d-flex align-content-end text-dark">
                <div className="navbar-Ending d-flex p-3">
                    <Timer className="navbar-Ending-Timer p"/>
                    <div className="navbar-Ending-EndClass align-content-center">
                        <button type="button" className="btn btn-danger text-color-light text-nowrap text-white-50"
                                data-bs-toggle="modal"
                                data-bs-target="#endClassModal" data-content="">End class
                        </button>
                        <Modal/>
                    </div>
                </div>
            </div>
        </header>
    )
}


const App = () => {
    return (
        <Navbar/>
    )
}

export default App

// const Toggler = () => {
//     {/*<div className="navbar-components collapse">*/
//     }
//     {/*    <div className="bg-light shadow-3 p-4">*/
//     }
//     {/*    */
//     }
//     {/*</div>*/
//     }
//     {/*</div>*/
//     }
//     {/*position-absolute end-0*/
//     }
//     {/*                    <button className="navbar-toggler ms-auto bg-dark collapsed" type="button" data-mdb-toggle="collapse"*/
//     }
//     {/*                            data-toggle="collapse"  data-mdb-target=".navbar-components" aria-controls="navbar-components"*/
//     }
//     {/*                            aria-expanded="false" aria-label="Toggle navigation" style={{outlineColor:"white"}}>*/
//     }
//     {/*>*/
//     }
//     {/*                    </button>*/
//     }
// // }
// //

//
