import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessIndex = (data) => {
  const history = useNavigate();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs`)
      .then(r => r.json())
      .then(data => setJobs(data))
      .catch(error => console.error("Error finnding jobs:", error));
  }, []
  );
  const jobElement = jobs.map((job) => (
    <div className="col-sm-6" key={job.jobsId}>
      <h2>
        <a href="#" onClick={() => history.push(`/jobs/${job.jobsID}`)}>
          {job.name}
        </a>
      </h2>
      {/* edit img tag to something that goes with code address */}
      {/* <img style={{ maxWidth: 200 }} src={job.pic} alt={job.name} /> */}
      <p className="text-center">Located in {job.city}, {job.state}</p>
    </div>
  ));
  return (
    <main>
      <h1>Love or Hate Your Current/Former Job?</h1>
      <div className="row">
        {jobElement}
      </div>
    </main>
  );
};

export default BusinessIndex;