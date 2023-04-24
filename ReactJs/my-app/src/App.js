import './App.css';
// import Navbar from './Navbar';
// import Components from './ComponentsFresh/Components'
// import Message from './ComponentsFresh/Message';
 import Profilenew from './ComponentsFresh/Profilenew';
// import Newmsg from './ComponentsFresh/Newmessage';
import Message from './classcompos/Message';
import Statemsg from './state/Statemsg';
import Counter from './state/Counter';
function App(){
  return(
    <div>
    {/* <Navbar abouthis="AboutThis" /> */}
     {/* <Components></Components>
     <Message/> */}
     <Profilenew firstname="Keerthi priya" lastname="Reddy"/>
      {/* <Profilenew firstname="Chandana " lastname="Peddi Reddy">
      <h1>This is a sample</h1>
     </Profilenew>
     
     <Profilenew firstname="Harihara" lastname=" Royal"/> */}
     {/* <Profilenew firstname="Harika" lastname=" Ranga"/> 
     <Newmsg msgcontent="This is new"/> */}
     <Message/>
     <Statemsg/>
     <Counter/>
    </div>
  );
}


export default App
