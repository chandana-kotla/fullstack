import React from 'react'
import Navbar from './UserApp/Navbar'
import UserApp from './UserApp/UserApp'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Router>
      <Navbar/>
      <Routes>
        <Route path="/users" element={<UserApp/>}></Route>
        
      </Routes>
      </Router>
    </div>
  )
}

export default App
