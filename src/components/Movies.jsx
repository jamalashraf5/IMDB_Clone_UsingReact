import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import MovieCards from './MovieCards'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleRemoveFromWatchList,handleAddtoWatchList,watchList}) {
    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)
   

    const handleForward = () =>{
        setPageNo(pageNo + 1)
    }

    const handlePre = () => {
        if(pageNo > 1){
            setPageNo(pageNo - 1)
        }
        
    }

    useEffect(()=>{
//https://api.themoviedb.org/3/tv/popular?api_key=12648453af45d587f5683250dfcf6fd2&language=en-US&page=1
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=12648453af45d587f5683250dfcf6fd2&language=en-US&page=${pageNo}`).then(function(res){
            // console.log(res)
            setMovies(res.data.results)
        },[pageNo])
    })
  return (
    <div>
      <Banner/>
      <div className='text-center text-3xl font-sans font-bold p-4 m-3'>
        Trending Movies
      </div>
      <div className='flex flex-wrap '>
        {movies.map((movieObj)=>{
            return <MovieCards watchList = {watchList} handleRemoveFromWatchList = {handleRemoveFromWatchList} movieObj = {movieObj} handleAddtoWatchList ={handleAddtoWatchList} poster_path={movieObj.poster_path}  name={movieObj.name} key={movieObj.id}/>

        })}
      </div>
      <Pagination pageNo ={pageNo} handleForward={handleForward} handlePre = {handlePre}/>
    </div>
  )
}

export default Movies
