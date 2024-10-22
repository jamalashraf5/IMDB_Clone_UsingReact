import React from "react";

function MovieCards({
  watchList,
  handleRemoveFromWatchList,
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <div
        className="rounded-md my-2 ml-4 h-[40vh] w-[172px]  bg-center bg-cover text-center hover:cursor-pointer hover:scale-110 duration-300 relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="p-1 text-lg bg-cover bg-slate-600 text-gray-100 bg-opacity-50 absolute flex items-center justify-center bottom-0 w-full">
          {name}
        </div>
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchList(movieObj)}
            className="absolute top-1 right-1 text-md bg-slate-900 rounded-lg p-1">
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchList(movieObj)}
            className="absolute top-1 right-1 text-md bg-slate-900 rounded-lg p-1"
          >
            &#128525;
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCards;

//https://api.themoviedb.org/3/tv/popular?api_key=12648453af45d587f5683250dfcf6fd2&language=en-US&page=1
