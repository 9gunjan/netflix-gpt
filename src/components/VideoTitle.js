import React from "react";

const VideoTitle = (props) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-32 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{props.title}</h1>
      <p className=" pt-12 text-lg w-1/2">{props.overview}</p>
      <div className="my-6">
        <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-4 bg-zinc-600 text-white p-4 px-10 text-xl rounded-lg hover:bg-opacity-80">
        ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
