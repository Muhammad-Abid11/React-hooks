import React, { useState } from 'react';
import './App.css';

function App() {

  // in class components state used as
  // constructor(){
  //  this.state={
  //    name:"abid"
  //  }
  // }

  //  for update in class component we use " setState({
  //  name:"Update"
  // }) "   


  const [name, setName] = useState("Muhammad Abid from useState");
  //like destructuring
  //[property,function]=useState("Default Value")
  const [email, setEmail] = useState("abidkhan@gmail.com");
  const [arr, setArr] = useState("car", "lion", "leopard");

  const handle = () => {
    setName("Abid")
    setEmail("Abid@gmail.com")
  }
  return (
    <div className="App">
      <p>Welcome{'\n'}{'\n'}
      </p>
      <p>React Hooks    {'\n'}</p>
      <p>Hello World ---> {name} Expo!</p>
      <p>email :   {email} Expo!</p>
      <p>Class 31</p>
      <button onClick={() => setName("Sajid")}>Update Name</button>
      <br />
      <button onClick={() => {
        setName("Taha")
        setEmail("Taha@gmail.com")
      }
      }>Update Name and Email</button>
      <br />
      <button onClick={handle}>set by function</button>
    </div >
  );
}

export default App;
