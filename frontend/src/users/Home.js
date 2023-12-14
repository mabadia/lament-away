// Home.js is home page for now / just view
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>  Welcome to Your App  </h2>
      <p>   </p>
      
      {/* Link to the feed */}
      <Link to="/feed">Go to Feed</Link>
    </div>
  );
};

export default Home;
