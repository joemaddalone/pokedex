import React from 'react';

const Home = () => (
  <div>
    {Array.from({ length: 1000 }).map((_, index) => (
      <div key={index} className="item">
        {index}
      </div>
    ))}
  </div>
);

export default Home;
