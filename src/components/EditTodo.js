import React, { useState, useEffect }from 'react'
import axios from "axios"



function EditTodo(props) {
  const [title, settitle] = useState(props.title);
  const [body, setbody] = useState(props.body);
  
  const gettodoInfo = async () => {
    const me = await axios.get(`http://localhost:4000/api/v1/todos/${props._id}`);
    settitle(me.data.title)
    setbody(me.data.body)
    
  }

  useEffect( () => {
    gettodoInfo()
    }, []);
  

  
  async function handleFormSubmit (event){
    event.preventDefault();
    try{
      await axios.put(`http://localhost:4000/api/v1/todos/${props._id}`, { title, body })
      this.history.push("/ListAll")
      ;
    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
        <div>
      <div>
        <form onSubmit={e => handleFormSubmit(e)}>
          
        <label>Title:</label>
        <input
            type="text"
            name="title"
            value={title}
            onChange={e => settitle(e.target.value)}
          />
          <br></br>
          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={e => setbody(e.target.value)}
          />
          <button type="submit" value="Submit">Edit</button>
        </form>
      </div>
      </div>
    )
}
export default EditTodo;