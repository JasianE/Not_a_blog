import './App.css'
import { Route, Routes } from 'react-router'
import Homepage from './pages/blog/Homepage'
import Navbar from './components/molecules/Navbar'
import ProjectPage from './pages/projects/ProjectPage'
import Now from './pages/now/Now'
import ProjectItem from './pages/projects/ProjectItem'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path = '/' element = {<Homepage />} />
          <Route path = '/projects' element={<ProjectPage />} />
          <Route path = '/project/:projectKey' element={<ProjectItem/>} />
          <Route path = '/now' element={<Now />} />
        </Routes>
    </>
  )
}

export default App
