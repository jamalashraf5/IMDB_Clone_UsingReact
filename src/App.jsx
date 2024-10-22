import { useState,useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {

  const [watchList, setWatchList] = useState([])

  useEffect(() => {
    const savedWatchList = localStorage.getItem('moviesApp');
    if (savedWatchList) {
      setWatchList(JSON.parse(savedWatchList)); // Parse the saved JSON back into an array
    }
  }, []); // Run only on component mount

  // Save watchlist to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem('moviesApp', JSON.stringify(watchList));
  // }, [watchList]); // Run whenever watchList changes

  const handleAddtoWatchList = (movieObj) =>{
     let newWatchList = [...watchList, movieObj]
     setWatchList(newWatchList)
     localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
  }

  const handleRemoveFromWatchList = (movieObj) =>{
    let newWatchList = watchList.filter((item)=> {
      return item.id !== movieObj.id
    })
    
    setWatchList(newWatchList)
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))

  }
  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies watchList = {watchList} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
          <Route path="/watchlist" element={<WatchList handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList} setWatchList={setWatchList}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
