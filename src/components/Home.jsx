import React from 'react';
import Navbar from './Navabar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to <span className="text-red-500">Admin Dashboard</span>
        </h1>
      </div>
    </>
  );
};

export default Home;

