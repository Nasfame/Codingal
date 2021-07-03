import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './images/logo.jpeg'
import Modal from "./components/Modal"
import Timer from "./components/Timer"

const Header = () => {
    return (

        <header className="header .d-flex justify-content-around header-light bg-light header-expand-sg text-dark sticky-top">

            <span className="header-logo">
            <img src={logo} alt="Logo"/>
            </span>
            <h4 className="header-Heading strong position-relative d-none d-md-block">Trial Lesson [Grade
                1-3]</h4>
            <h2 className="header-Heading strong position-relative d-md-none">Codingal</h2>
            <Timer/>
            <Modal/>
            <div className="header-endClass">
                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                        data-bs-target="#endClassModal" title="Modal title"
                        data-content="And here's some amazing content. It's very engaging. Right?">End class
                </button>
            </div>
            {/*<div className="header-components collapse">*/}
            {/*    <div className="bg-light shadow-3 p-4">*/}
            {/*    */}
            {/*</div>*/}
            {/*</div>*/}
            {/*position-absolute end-0*/}
                {/*                    <button className="header-toggler ms-auto bg-dark collapsed" type="button" data-mdb-toggle="collapse"*/}
            {/*                            data-toggle="collapse"  data-mdb-target=".header-components" aria-controls="header-components"*/}
            {/*                            aria-expanded="false" aria-label="Toggle navigation" style={{outlineColor:"white"}}>*/}
            {/*>*/}
            {/*                    </button>*/}
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

//
