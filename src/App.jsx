import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import PageNotFound from './pages/PageNotFound'

// Configure axios defaults globally
axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:3600";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes >
  )
}

export default App
