import {Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../components/home/Home'
import { AboutMe } from '../components/home/AboutMe'
import { Projects } from '../components/Projects'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}
