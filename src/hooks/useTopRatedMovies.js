import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedVideo = useSelector(store => store.movies.topRatedVideo);
  //Fetching movie data(Movie List -> Now Playing) from TMDB
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    //updating the redux store(moviesSlice)
    dispatch(addTopRatedMovies(json.results));
  };

  //Rendering Movie data
  useEffect(() => {
    !topRatedVideo && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
