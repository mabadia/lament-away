import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

//Used object destructuring to import useEffect and useState directly from React.
const BusinessIndex = () => {
  const history = useHistory();
  const [jobs, setJobs] = useState([]);

  useEffect(() => { fetch("http://localhost:3000/jobs").then(r => r.json()).then(data => setJobs(data)).catch(error => console.error("Error finnding jobs:", error)); }, []);

  //Combined the map function directly inside the return statement.
  return (
    <main>
      <h1>Love or Hate Your Current/Former Job?</h1>
      <div className="row">
        {jobs.map(jobs => (
          <div className="col-sm-6" key={jobs.jobsId}>
            <h2><a href="#" onClick={() => history.push(`/jobs/${jobs.jobsID}`)}>{jobs.name}</a></h2>   
             <img style={{ maxWidth: 200 }} src={jobs.pic} alt={jobs.name} />
            <p className="text-center">Located in {jobs.city}, {jobs.state}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BusinessIndex;