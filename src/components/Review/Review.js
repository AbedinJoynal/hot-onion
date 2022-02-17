import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Review = () => {
  const uses=useContext(UserContext)
  return <div>
    This is review{uses}
  </div>;
};

export default Review;
