// components/Loader.js
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <FaSpinner className="animate-spin h-12 w-12 text-blue-500" />
    </div>
  );
};

export default Loader;
