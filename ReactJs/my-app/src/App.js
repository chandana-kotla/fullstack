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
// import React from 'react'
// import Navbar from './Routing/Navbar'
// import Home from './Routing/Home'
// import About from './Routing/About'
// import Services from './Routing/Services'
// import Contact from './Routing/Contact'
// import Post from './Posts/Post'
// import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'
// import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
// function App() {
//     return (
//         <div>
//             <Router>
//                 <Navbar />
//                 <Switch>

//                     <Route path="/home" component={Home} />
//                     <Route path="/about" component={About} />
//                     <Route path="/services" component={Services} />
//                     <Route path="/contact" component={Contact} />
//                     <Route path="/post" component={Post}/>
//                 </Switch>
//             </Router>
//         </div>
//     )
// }

// export default App

// import React from "react";
// import Counter from "./Hooks/Counter";
// // import Users from "./Hooks/Users";
// // import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// const App = () => {
//     return (
//         <div>
//             {/* <Router>
//                 <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
//                     <Link to="/index">React Hooks</Link>
//                     <div className='ml-auto'>
//                         <ul className='navbar-nav'>
//                             <li className="nav-list"><Link className="nav-link" to="/useStateEx">useState-Ex1</Link> </li>
//                             <li className="nav-list"><Link className="nav-link" to="/useStateEx2">useState-Ex2</Link> </li>
//                             <li className="nav-list"><Link className="nav-link" to="/classLife">LifeCycle-Class</Link> </li>
//                             <li className="nav-list"><Link className="nav-link" to="/usersClass">Users-Class</Link> </li>
//                             <li className="nav-list"><Link className="nav-link" to="/useRefEx">useRef</Link> </li>
//                         </ul>
//                     </div>
//                 </nav >
//                 <Switch>
//                     {/* <Route path="/useStateEx" component={Message} />
//                     <Route path="/useStateEx2" component={Counter} />
//                     <Route path="/classLife" component={Test} /> */}
//                     {/* <Route path="/usersClass" component={Users} /> */}
//                     {/* <Route path="/useRefEx" component={Login} /> */}
//                 {/* </Switch>
//             </Router > */} 
//             <Counter/>
//         </div >
//     )
// }

// export default App
import React from 'react'
import Counter from './Hooks/Counter'
import Login from './Hooks/Login'
const App = () => {
  return (
    <div>
      <Counter/>
     <br></br>
       <Login/>
    </div>
  )
}

export default App
