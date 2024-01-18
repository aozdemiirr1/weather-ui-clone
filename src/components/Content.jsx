import React from 'react'

const Content = ({ weatherData }) => {
    const { city, temperature, condition } = weatherData;
  
    return (
      <div className='container mx-auto mt-32 flex flex-col justify-center items-center gap-y-20'>
        <h2 className='text-6xl border font-bold border-white bg-white px-5 py-5'>{city}</h2>
        <div className='flex flex-row gap-x-5 text-5xl border border-blue-600 bg-blue-600 text-white font-bold px-5 py-5'>
          <span>{temperature}°</span>
          <span>{condition}</span>
        </div>
      </div>
    );
  };
  

export default Content