// import './App.css';
// // import Product from './product/Product';
// // import Products from './product/Products';
// // import Message from './EventBinding/Message';
// // import Salary from './EventBinding/Salary';
// // import Employee from './Employee/Employee';
// // import User from './user/User';
// // import Digital from './Digital';

// import Navbar from './Routing/Navbar';
// function App(){
//   return(
//     <div>
//       {/* <Product/>
//       <Products/> */}
//       {/* <Products/>
//       <Message/>
//       <Salary/> */}
//       {/* <Employee/> */}
//       {/* <User/> */}
// {/* <Digital/> */}
// <Navbar/>
//     </div>
//   );
// }


// export default App
import React from 'react'
import Navbar from './Routing/Navbar'
import Home from './Routing/Home'
import About from './Routing/About'
import Services from './Routing/Services'
import Contact from './Routing/Contact'
import Post from './Posts/Post'
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>

                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/post" component={Post}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
