import React, { useState, useEffect } from 'react';
import './App.css';
import Home from "./Home"
function App() {
  // useState used for "State"

  // -------------X-------------------
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
  // we can also used in array  
  const [arr, setArr] = useState(["car", "lion", "leopard"]);
  // we can also used in  object 
  const [obj, setObj] = useState({
    name: "Ali",
    email: "Ali@gmail.com"
  });

  const handle = () => {
    setName("Abid")
    setEmail("Abid@gmail.com")
  }

  const arrUpdate = () => {
    setArr([...arr, "Dog"])

  }

  const objUpdate = () => {
    setObj({
      name: "Bilal",
      email: "bilal@gmail.com"
    })
  }

  // -------------X-------------------

  // useEffect used for "lifecycle"

  useEffect(() => {
    console.log("I will run on every render")
  })

  useEffect(() => {
    console.log("I will run only on 1st render")
  }, [])  // like componentDidMount

  useEffect(() => {
    console.log("I will run every time when 'name' or 'email' is updated")
  }, [name, email])


  useEffect(() => {
    return () => {
      console.log("When Unmount")
    }
  })  //like componentWillUnmount

  return (
    <div className="App">
      <p>Welcome</p>
      <p>React Hooks</p>
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

      <ul>
        {arr.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
      <button onClick={arrUpdate}>Array Update</button>

      <br />

      <p>Data from object Hook -- {obj.name} and {obj.email} </p>
      <button onClick={objUpdate}>Update Object</button>

      <br /><br /> <h1>Props down</h1>
      <Home name="Props from App.jsx" email="prop@gmail.com" />
    </div >
  );
}

export default App;
