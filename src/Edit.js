import React, { useState } from "react";

function Edit(props) {

    const {currentDetails, handleEditClick2} = props
    console.log(props, 'props from edit')
    let propName = currentDetails.name
    let propEmail = currentDetails.email
    const [newName, setNewName] = useState(propName)
    const [newEmail, setNewEmail] = useState(propEmail)


    return (
        <div className="form">
            <h4>Enter new values: </h4>
            <input type="name" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
            <button onClick={() => handleEditClick2(newName, newEmail)}>Submit</button>        
        </div>
    )
}

export default Edit;