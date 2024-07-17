import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch video with type = trailer and updating the redux store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const filterTrailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailerData.length
      ? filterTrailerData[0]
      : json.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
