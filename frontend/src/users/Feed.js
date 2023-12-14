import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from './contexts/CurrentUser';

const Feed = () => {
  const currentUser = useContext(CurrentUserContext);
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    // Fetch the feed items for backend and update (FYP) with fetched data
  }, []);

  return (
    <Router>
    <div>

            <h2>FYP</h2>


      {/* Render content here */}


    </div>
    </Router>
  );
};

export default Feed;
