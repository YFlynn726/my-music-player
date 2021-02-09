import React, { useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
//Imprt Util
import data from "./util";

function App() {
  //Use State here
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
