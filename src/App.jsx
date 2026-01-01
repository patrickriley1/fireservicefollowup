import { useState } from 'react'
import './App.css'

function App() {
  const [jobs, setJobs] = useState([ 
    { id: 1, name: 'Job 1', recipient: 'Recipient 1', message: 'Hi there! We need you to pay up. It has been too long, please take action.' }, 
    { id: 2, name: 'Job 2', recipient: 'Recipient 2', message: 'Message 2' }, 
    { id: 3, name: 'Job 3', recipient: 'Recipient 3', message: 'Message 3' },
    { id: 4, name: 'Job 4', recipient: 'Recipient 4', message: 'Message 4' }
  ])
  const [selectedJob, setSelectedJob] = useState(null)
  const [messagePreview, setMessagePreview] = useState(null)

  return (
    <div>
      <div className='header'>
        <h1>Fireservice Follow Up</h1>
      </div>
      <div className='content'>
        <div className='jobs'>
          {jobs.map((job) => (
            <div key={job.id} className='job'>
              <h2 onMouseClick={() => { setSelectedJob(job) }}>{job.name}</h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
