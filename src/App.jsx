import React from "react";
import { useState } from "react";
import "./index.css";
import "./app.css";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 40399,
      name: "Karen Ryan",
      recipient: "nriley@fireserviceusa.com",
      message:
        "Dear Ms. Ryan, I hope this message finds you well. I am writing to follow up regarding the repair estimate we sent on August 27, 2025, for your property (Job ID 40399). We understand that the repairs have been on hold pending approval of the full remediation and that you are currently coordinating with the HOA on the remediation process. Please know that our team remains ready to assist you whenever you are prepared to move forward. If you have any questions about the estimate or the next steps, or if there is anything we can do to support you during this process, please feel free to contact Cameron Holmes, our Project Manager, at 239-823-7641, or reach out to me directly at 239-533-9718. Thank you for the opportunity to assist you. We look forward to working with you when you are ready to proceed. Best regards, Melissa Calcano Customer Service Administrator Fireservice Emergency Disaster Response Phone: 239-533-9718 ",
    },
    { id: 41691, name: "Brenda Cassaday", recipient: "nwriley14@gmail.com", message: "Dear Ms. Cassaday, I hope this message finds you well. I am reaching out to follow up on the estimate we sent on December 10th regarding the repairs needed at your property. We understand from your previous communication that you have chosen to have another party handle the repair work. We want to ensure that you received all the billing details and the invoice for the mitigation services we provided. If you did not receive these documents or if you need us to resend them, please let us know. For your convenience, the invoice can be paid directly by clicking the blue payment link at the bottom of the invoice. We accept credit cards, ACH, EFT, and checks. Should you prefer to process payment over the phone, you can reach me directly at 239-744-2232. If you have any additional questions or require further assistance, please do not hesitate to contact me or Cameron Holmes at 239-823-7641. Thank you again for the opportunity to assist you. Kind regards, Melissa Calcano Customer Service Administrator Fireservice Emergency Disaster Response Phone: 239-744-2232 Email: mcalcano@fireserviceusa.com" },
    { id: 37076, name: "Jack Lomano Trust", recipient: "nriley@fireserviceusa.com", message: "Message 3" },
    { id: 39974, name: "Lamaita S Moncrieffe", recipient: "nwriley14@gmail.com", message: "Message 4" },
  ]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleEdit = () => {
    const job = jobs.find((job) => job.id === selectedJob);
    setEditedMessage(job ? job.message : "");
    setIsEditing(true);
  };

  const handleSave = () => {
    setJobs(
      jobs.map((job) =>
        job.id === selectedJob ? { ...job, message: editedMessage } : job
      )
    );
    setIsEditing(false);
  };

  const selected = jobs.find((job) => job.id === selectedJob);

  return (
    <div>
      <div className="header">
        <h1>Fireservice Estimate Follow Up</h1>
      </div>
      <div className="content">
        <div className="jobs">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="job"
              onClick={() => {
                setSelectedJob(job.id);
                setIsEditing(false);
              }}
            >
              <h2>{job.id} - {job.name}</h2>
            </div>
          ))}
        </div>
        <div className="job-details">
          {selected ? (
            <>
              <h2>{selected.id} - {selected.name}</h2>
              <p>To:{selected.recipient}</p>
              <p>Subject: Follow Up on Repair Estimate</p>
              <p className="message">Body:{selected.message}</p>
              <button>Send</button>
              <button onClick={handleEdit}>Edit</button>
            </>
          ) : (
            <p>Select a job to see details</p>
          )}
          {isEditing && (
            <div className="edit-message">
              <h3>Edit Message</h3>
              <textarea
                value={editedMessage}
                onChange={(e) => setEditedMessage(e.target.value)}
                placeholder="Message"
              />
              <button onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
