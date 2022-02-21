import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom"

function Read() {
  const [APIdata,setAPIData] =useState([])

  useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setAPIData(json));
  }, [])

  const storeDataToLocalStorage = (data) =>{
    localStorage.setItem('USER_ID', data.userId);
    localStorage.setItem('TITLE', data.title);
    localStorage.setItem('BODY', data.body)
    localStorage.setItem('ID', data.id)
  }

  const deleteSingleData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">USERID</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">TITLE</TableCell>
            <TableCell align="center">BODY</TableCell>
            <TableCell align="center">UPDATE</TableCell>
            <TableCell align="center">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {APIdata.map((singleData) => (
            <TableRow
              key={singleData.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {singleData.userId}
              </TableCell>
              <TableCell align="center">{singleData.id}</TableCell>
              <TableCell align="center">{singleData.title}</TableCell>
              <TableCell align="center">{singleData.body}</TableCell>
              <TableCell align="center">
                <Link to="/update">
                <button onClick={() => {storeDataToLocalStorage(singleData); console.log("store data to local-storage")}}>Update</button>
                </Link>
                </TableCell>
                <TableCell align="center">
                <button onClick={() => {deleteSingleData(singleData.id)}}>Delete</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Read