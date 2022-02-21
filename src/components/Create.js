import React, {useState} from 'react'
import './Form.css'


function Create() {
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [body, setBody] = useState('')

  const userIdHandler = (e) => {
    setUserId(e.target.value)
  }
  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const bodyHandler = (e) => {
    setBody(e.target.value)
  }

  const createFormHandler = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setUserId('')
    setTitle('')
    setBody('')
  }

  return (
    <>
    <form onSubmit={createFormHandler}>
      <h2>Create</h2>
      <label htmlFor='userId'>UserId</label>
      <input type="text" required value={userId} onChange={userIdHandler}></input>
      <label htmlFor='title'>Title</label>
      <input type="text" required value={title} onChange={titleHandler}></input>
      <label htmlFor='body'>Body</label>
      <input type="text" required value={body} onChange={bodyHandler}></input>   
      <button type='submit'>Create</button>         
    </form>
    </>
  )
}

export default Create