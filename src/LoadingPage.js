import React, { useEffect, useRef } from 'react'
import { PacmanLoader } from 'react-spinners';

const LoadingPage = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingDiv.current.classList.add("animate__fadeOut");
        setTimeout(() => {
          document.getElementById('html').style.overflow = 'auto';
          loadingDiv.current.style.display = "none";
        }, 900);
      }, 2000);
    });
  }, []);
  const loadingDiv = useRef();
  return (
    <div ref={loadingDiv} id='loading-page' className='animate__animated'>
      <PacmanLoader
        className='animate__animated animate__fadeIn'
        color="#FE4D80"
        cssOverride={{}}
        loading
        size={40}
      /></div>
  )
}

export default LoadingPage