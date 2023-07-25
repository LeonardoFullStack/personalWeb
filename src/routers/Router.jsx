import {Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../components/home/Home'
import { AboutMe } from '../components/home/AboutMe'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}
