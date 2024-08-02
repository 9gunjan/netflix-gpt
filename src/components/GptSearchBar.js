import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_API } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //Search movie reccos got from gemini api in tmdb database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to GEMINI ai api and get movie results
    const genAI = new GoogleGenerativeAI(GEMINI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      "Act as a movie recommendation " +
      searchText.current.value +
      "only give names of 5 movies,separate them by commas and remove \n from the response";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);

    const gptMovies = text.split(", "); //this will give an array
    console.log(gptMovies);

    //for each movie i'll search in tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className=" md:w-1/2 bg-black md:grid md:grid-cols-12 sm:w-2/3"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 md:col-span-9"
        />
        <button
          className="py-2 px-4 m-4  bg-red-700 text-white rounded-lg md:col-span-3"
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
