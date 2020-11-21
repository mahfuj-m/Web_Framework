import React from 'react';
import SignUp from './Verification/SignUp';
import Home from './Home/Home';

import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom';




class App extends React.Component{


    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                        </ul>
                    </nav>
                
                </div>
                <Switch>
                <Route path="/signup"  exact component={SignUp}></Route>
                <Route path='/' component={Home}/>

                </Switch>


            </Router>

        );

    }
}

export default App;