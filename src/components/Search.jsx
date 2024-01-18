import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
    }
  };

  return (
    <div className='header container mx-auto flex flex-col lg:flex-row justify-between items-center gap-x-20 mt-10 lg:mt-32'>
      <h1 className='text-4xl text-white px-10 py-10 rounded-full font-bold brightness-75 border border-blue-600 bg-blue-600'>
        WEATHER
      </h1>
      <div className='flex flex-row items-center'>
        <input
          type='text'
          placeholder='SEARCH'
          className='search outline-none border border-blue-600 rounded-full bg-blue-600 px-5 py-5 text-white text-xl'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className='btn-search outline-none border border-white rounded-full px-5 py-7 bg-white text-blue-600 font-bold -ml-10'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search