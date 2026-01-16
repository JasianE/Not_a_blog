import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './pages/blog/Homepage'
import Navbar from './components/molecules/Navbar'
import Blog from './pages/blog/BlogPage'
import BlogItem from './pages/blog/BlogItem'
import CreateBlogPage from './pages/blog/CreateBlogPage'
import ProjectPage from './pages/projects/ProjectPage'
import PageCardLayout from './components/molecules/Container'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path = '/' element = {<Homepage />} />
          <Route path = '/blog' element = {<Blog />} />
          <Route path = '/blog/:blogKey' element={<BlogItem/>} />
          <Route path = '/create' element={<CreateBlogPage />} />
          <Route path = '/projects' element={<ProjectPage />} />
        </Routes>
    </>
  )
}

export default App
