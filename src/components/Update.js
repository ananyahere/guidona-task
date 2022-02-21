import React, {useEffect, useState} from 'react'

function Update() {
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [body, setBody] = useState('')
  const [id, setId] = useState('')

  const userIdHandler = (e) => {
    setUserId(e.target.value)
  }
  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const bodyHandler = (e) => {
    setBody(e.target.value)
  }

  useEffect(() => {
    setUserId(localStorage.getItem('USER_ID'))
    setBody(localStorage.getItem('BODY'))
    setTitle(localStorage.getItem('TITLE'))
    setId(localStorage.getItem('ID'))
  }, [])

  const updateFormHandler = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title,
        body,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    setUserId('')
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={updateFormHandler}>
      <h2>Update</h2>
      <label htmlFor='userId' >UserId</label>
      <input type="text" value={userId} onChange={userIdHandler}></input>
      <label htmlFor='title'>Title</label>
      <input type="text" value={title} onChange={titleHandler}></input>
      <label htmlFor='body'>Body</label>
      <input type="text" value={body} nChange={bodyHandler}></input>   
      <button>Update</button>         
    </form>
  )
}

export default Update