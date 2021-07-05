import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Home from './home'
import Posts from './posts'

const Webpages = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
        </Router>
    );
};
export default Webpages;