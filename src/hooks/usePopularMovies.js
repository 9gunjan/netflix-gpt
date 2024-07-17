import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  //Fetching movie data(Movie List -> Now Playing) from TMDB
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    //console.log(json.results);
    //updating the redux store(moviesSlice)
    dispatch(addPopularMovies(json.results));
  };

  //Rendering Movie data
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
