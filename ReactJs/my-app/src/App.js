import './App.css';
// import Product from './product/Product';
import Products from './product/Products';
import Message from './EventBinding/Message';
import Salary from './EventBinding/Salary';
function App(){
  return(
    <div>
      {/* <Product/>
      <Products/> */}
      <Products/>
      <Message/>
      <Salary/>
    </div>
  );
}


export default App
