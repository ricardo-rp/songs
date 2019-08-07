import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "4:38" },
    { title: "No Diggity", duration: "4:32" },
    { title: "All Star", duration: "3:57" },
    { title: "Never Gonna Give You Up", duration: "3:32" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
 
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
