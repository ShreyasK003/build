// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {

  const [first, setfirst] = useState([])

  // const setUsers = async ()=>{
  //   const url = await fetch("https://sunglasses-dugong.cyclic.app/")
  //   const data =  await url.json()
  //   // setfirst(data)
  //   console.log(data)
  // }

  useEffect( () => {

    return async() => {

    const url = await fetch("https://sunglasses-dugong.cyclic.app/")
    const data =  await url.json()
    setfirst(data)
    console.log(data)

    }
  })
  

  return (
    <>
    {first.map(users=>(
      <tr key={users.id}>
        <td>{users.username}</td>
        <td>{users.email}</td>
        <td>{users.password}</td>
        <td>{users.date}</td>
      </tr>
    ))}
    <p>Hello world</p>
    </>
  );
}

export default App;
