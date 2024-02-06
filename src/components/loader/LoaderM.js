import React, { useState, useEffect } from 'react';
import loader from './loader.gif'
import "./loader.css"
const LoaderM = ({ src, duration }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  

  return (
    <div className=''>
      {isPlaying && <img src={loader} alt="GIF" className='loader' />}
    </div>
  );
};

export default LoaderM;
