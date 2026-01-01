import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState([ { id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' } ])
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div>
      <div className='header'>
        <h1>Fireservice Follow Up</h1>
      </div>
      <div className='content'>
        <div className='projects'>
          {projects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
