import React from 'react'
import {Routes, Route} from "react-router"
import Movie from './pages/Movie'

export default function App() {
  return (
    <div style = {
      {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }
    }>
      <header>Streaming Platform</header>
      <main style={{flexGrow: 1}}>
        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path='/*' element={<h1>Not Found</h1>}/>
          <Route path='/movie/:id' element={<Movie />}/>
        </Routes>

</main>

      <footer>
        &copy; {new Date().getFullYear()} Streaming Platform
      </footer>
    </div>
  )
}
