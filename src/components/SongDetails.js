import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ selectedSong }) => {
  console.log("TCL: SongDetails -> selectedSong", selectedSong);
  if (!selectedSong) return <div>select a song</div>;
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

// We are exporting the CONNECT component, which is calling the SongDetails Component inside itself with the appropriate props
export default connect(mapStateToProps)(SongDetails);
