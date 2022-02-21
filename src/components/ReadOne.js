import React, {useState} from 'react'

function ReadOne() {
  const [inputId, setInputId] = useState('')
  const [output, setOutput] = useState({})

  const inputIdHandler = (e) =>{
    setInputId(e.target.value)
  }

  const singleReadHandler = (e) => {
    e.preventDefault()
    fetch(`https://jsonplaceholder.typicode.com/posts/${inputId}`)
    .then((response) => response.json())
    .then((json) => setOutput(json));
    setInputId('')
  }

  return (
    <div>
      <form onSubmit={singleReadHandler}>
      <label htmlFor='inputId' >Id</label>
      <input type="text" value={inputId} onChange={inputIdHandler}></input>
      <button type="submit">Get Post</button>
      </form>
      <div className="output">
        {output !== {} && (
          <>
         <p>USER_ID: {output.userId}</p> <br/>
          <p>ID: {output.id}</p> <br/>
          <p>TITLE: {output.title}</p> <br/>
          <p>BODY: {output.body}</p> <br/>
          </>
        )}
      </div>
    </div>
  )
}

export default ReadOne