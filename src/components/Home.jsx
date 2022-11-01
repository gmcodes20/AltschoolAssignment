import React from "react";

function Home() {
  return (
    <div className="container ">
      <div className="flex home-container ">
        <div className="intro" style={{ backgroundColor: '#000', padding: '2rem' }}>
          <p style={{ textAlign: 'left' }} className="big">Hello!</p>
          <h2 style={{ fontSize: '4.2rem' }}>Welcome to the ReactJS Router and Pagination Project</h2>
          <p>Feel at home and of course, Explore</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
