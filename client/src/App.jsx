import React from 'react'
import {Routes, Route} from "react-router"
import Movie from './pages/Movie'
import { getMovies, searchMovies} from "./store/APIReducer"
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './components/Footer'
import Container from '@mui/material/Container'
import Main from './pages/Main'

export default function App() {

  let dispatch = useDispatch();

  
  return (
    <div style = {
      {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }
    }>
      <CssBaseline />
      <Header />
      <Container sx={{flexGrow: 1}}>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/*' element={<h1>Not Found</h1>}/>
          <Route path='/movie/:id' element={<Movie />}/>
        </Routes>

      </Container>

      <Footer />
    </div>
  )
}
