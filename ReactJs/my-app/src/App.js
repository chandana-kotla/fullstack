import React from 'react'
import Home from './UserApp/Home'
import Userapp from './UserApp/Userapp'
import { Link, BrowserRouter as Router,  Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="/" className='navbar-brand'>User App</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><Link className='nav-link' to="/home">Home</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="/users">Users</Link></li>
                        </ul>
                    </div>
                </nav>
               
                    <Route path="/home" Component={Home} />
                    <Route path="/users" element={<Userapp />} />
              

            </Router>
        </React.Fragment>
    }
}


export default App