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
  const [isEditing, setIsEditing] = useState(false)
  const [editedMessage, setEditedMessage] = useState('')

  const handleEdit = () => {
    const job = jobs.find(job => job.id === selectedJob)
    setEditedMessage(job ? job.message : '')
    setIsEditing(true)
  }

  const handleSave = () => {
    setJobs(jobs.map(job =>
      job.id === selectedJob ? { ...job, message: editedMessage } : job
    ))
    setIsEditing(false)
  }

  const selected = jobs.find(job => job.id === selectedJob)

  return (
    <div>
      <div className='header'>
        <h1>Fireservice Follow Up</h1>
      </div>
      <div className='content'>
        <div className='jobs'>
          {jobs.map((job) => (
            <div key={job.id} className='job' onClick={() => { setSelectedJob(job.id); setIsEditing(false); }}>
              <h2>{job.name}</h2>
            </div>
          ))}
        </div>
        <div className='job-details'>
          {selected ? (
            <>
              <h2>{selected.name}</h2>
              <p>{selected.recipient}</p>
              <p>{selected.message}</p>
              <button>Send</button>
              <button onClick={handleEdit}>Edit</button>
            </>
          ) : (
            <p>Select a job to see details</p>
          )}
          {isEditing && (
            <div className='edit-message'>
              <h3>Edit Message</h3>
              <textarea
                value={editedMessage}
                onChange={e => setEditedMessage(e.target.value)}
                placeholder="Message"
              />
              <button onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
