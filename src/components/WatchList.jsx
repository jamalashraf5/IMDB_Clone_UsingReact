// 

import genreId from '../Utility/genre';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import React from "react";

function WatchList({ watchList, handleRemoveFromWatchList, setWatchList }) {

  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState(['All genres']);
  const [currGenre, setCurrGenre] = useState();

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  }

  const sortIncreasing = () => {
    let sortedInc = watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchList([...sortedInc]);
  }

  const sortDecreasing = () => {
    let sortedDec = watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchList([...sortedDec]);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreId[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenres(['All genres', ...temp]);
  }, [watchList]);

  return (
    <>
      {/* Genre Filter Section */}
      <div className="flex justify-center hover:cursor-pointer gap-3 my-5 flex-wrap">
        {genres.map((genre) => {
          return (
            <div 
              key={genre} 
              onClick={() => handleFilter(genre)} 
              className={currGenre === genre 
                ? "bg-blue-400 text-stone-900 px-3 py-1 rounded-lg text-xs md:text-lg" 
                : "bg-gray-400 text-stone-900 px-3 py-1 rounded-lg text-xs md:text-lg"
              }>
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch} 
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-8 sm:h-[2rem] w-[14rem] sm:w-[20rem] p-2 bg-gray-300 rounded-md text-sm sm:text-lg outline-none"
        />
      </div>

      {/* Table Container */}
      <div className="rounded-lg overflow-x-auto border border-gray-200 mx-2 sm:mx-4 lg:mx-8">
        <table className="min-w-full text-zinc-700 text-center">
          <thead className="border-b-2 text-black">
            <tr>
              <th className="text-xs sm:text-base">Name</th>
              <th className="text-xs sm:text-base">
                <div className="flex gap-1 sm:gap-2 justify-center items-center">
                  <FaArrowUpLong onClick={sortIncreasing} className="hover:cursor-pointer" />
                  <p className="text-xs sm:text-base">Ratings</p>
                  <FaArrowDownLong onClick={sortDecreasing} className="hover:cursor-pointer" />
                </div>
              </th>
              <th className="text-xs sm:text-base">Popularity</th>
              <th className="text-xs sm:text-base">Genre</th>
              <th className="text-xs sm:text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj) => {
              if (currGenre === 'All genres') {
                return true;
              } else {
                return genreId[movieObj.genre_ids[0]] === currGenre;
              }
            }).filter((movieObj) => {
              return movieObj.name.toLowerCase().includes(search.toLowerCase());
            }).map((movieObj) => {
              return (
                <tr key={movieObj.id} className="border-b-2 text-xs sm:text-sm lg:text-base">
                  <td className="flex items-center gap-3 sm:gap-5 p-2 sm:p-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.name}
                      className="h-12 w-8 sm:h-[10vh] sm:w-[8vw] object-cover"
                    />
                    <div>{movieObj.name}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreId[movieObj.genre_ids[0]]}</td>
                  <td
                    onClick={() => handleRemoveFromWatchList(movieObj)}
                    className="text-red-600 hover:cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
