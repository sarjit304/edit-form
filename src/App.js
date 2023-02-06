import './App.css';
import { useState } from 'react';
import Edit from './Edit'


function App() {

  const [data, setData] = useState([{name:"sarjit", email:"test@gmail.com", isFavourite: false}])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isEditClicked, setIsEditClicked] = useState([false, {}])
  const [editedName, setEditedName] = useState('')
  const [editedEmail, setEditedEmail] = useState('')
  const [currenDetails, setCurrentDetails] = useState({})

  console.log(isEditClicked)

  function handleSubmit(e) {
    e.preventDefault()
    let newData = [...data]
    newData.push({name: name, email:email, isFavourite:false})
    setData(newData)
    console.log(data)
  }

  function handleRemove(e, obj) {
    e.preventDefault()
    console.log(obj)
    let newData = [...data]
    // let removed = newData.filter((i) => {
    //   return i.email != obj.email
    // })
    // setData(removed)
    
    let index = newData.findIndex((i) => {
      return i.email === obj.email
    })
    newData.splice(index, 1)
    setData(newData)
  }

  function handleEdit(e, obj) {
    e.preventDefault()
    // console.log('Edit this object: ', obj)
    setIsEditClicked([true, {...obj}])
    setCurrentDetails({name: obj.name, email: obj.email})
    // console.log(isEditClicked, 'testtest')
  }

  function handleEditClick(e) {
    // e.preventDefault()
    let newData = [...data]
    let index = newData.findIndex((obj) => {
      return obj.email === isEditClicked[1].email
    })
    console.log(index, 'index')
    newData[index].name = editedName
    newData[index].email = editedEmail
    setData(newData)
    setIsEditClicked([false, {}])
    setCurrentDetails({})
  }

  function handleEditClick2(newName, newEmail) {
    console.log(newName, newEmail, 'handleData')
    let newData = [...data]
    let index = newData.findIndex((obj) => {
      return obj.email === isEditClicked[1].email
    })
    // console.log(index, 'index')
    newData[index].name = newName
    newData[index].email = newEmail
    setData(newData)
    setIsEditClicked([false, {}])
    setCurrentDetails({})
  }

  function createFavourite(e, obj) {
    e.preventDefault()
    let newData = [...data]
    let index = newData.findIndex((currentObj) => {
      return currentObj.email === obj.email
    })
    newData[index].isFavourite = true
    setData(newData)
  }

  function removeFavourite(e, obj) {
    e.preventDefault()
    let newData = [...data]
    let index = newData.findIndex((currentObj) => {
      return currentObj.email === obj.email
    })
    newData[index].isFavourite = false
    setData(newData)
  }

  return (
    <div className="App">
      <div className='favourites'>
        <h3 className='favourites-items'>Current Favourites: </h3>
        {data.map((obj) => {
          if (obj.isFavourite) return <h3 className='favourites-items'>{obj.name + ","}</h3>
          return undefined
        })}
      </div>
        
      <table>
        <thead><tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
          <th>Favourites</th>
        </tr></thead>
        <tbody>
          {data.map((obj) => {
            return (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td><button onClick={(e) => handleRemove(e, obj)}>Remove</button>
                <button onClick={(e) => handleEdit(e, obj)}>Edit</button></td>
                <td><button disabled={obj.isFavourite} onClick={(e) => createFavourite(e, obj)}>Make Fav</button> 
                <button disabled={!(obj.isFavourite)} onClick={(e) => removeFavourite(e, obj)}>Remove Fav</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    
      <div className='form'>
        <h4>Add new data:</h4>
        <div>
          <input type="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
        </div>
        <div>
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
        </div>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>

      {isEditClicked[0]? <Edit currentDetails={currenDetails} handleEditClick2={handleEditClick2}/>: null}

      {/* {isEditClicked[0]? 
      <div className='form'>
        <h4>Enter new values:</h4>
        <h5>Current Details: {currenDetails.name} {currenDetails.email}</h5>
        <input type="name" onChange={(e) => setEditedName(e.target.value)} placeholder="Enter Name" value={currenDetails.name}></input>
        <input type="email" onChange={(e) => setEditedEmail(e.target.value)} placeholder="Enter Email" value={currenDetails.email}></input>
        <button onClick={(e) => handleEditClick(e)}>Submit</button>
      </div> :null} */}



    </div> 
  );
}

export default App;
