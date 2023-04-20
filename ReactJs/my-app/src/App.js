import './App.css';
// import Navbar from './Navbar';
// import Components from './ComponentsFresh/Components'
// import Message from './ComponentsFresh/Message';
import Profilenew from './ComponentsFresh/Profilenew';
import Newmsg from './ComponentsFresh/Newmessage';
function App(){
  return(
    <div>
    {/* <Navbar abouthis="AboutThis" /> */}
     {/* <Components></Components>
     <Message/> */}
      {/* <Profilenew firstname="Chandana " lastname="Peddi Reddy">
      <h1>This is a sample</h1>
     </Profilenew>
     <Profilenew firstname="Keerthi priya" lastname="Reddy"/>
     <Profilenew firstname="Harihara" lastname=" Royal"/> */}
     <Profilenew firstname="Harika" lastname=" Ranga"/> 
     <Newmsg msgcontent="This is new"/>
    </div>
  );
}


export default App
