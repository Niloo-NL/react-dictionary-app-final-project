import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetics">
      <AudioPlayer
        src={props.input.audio}
        autoPlay={false}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
        hasDefaultKeyBindings={false}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
      />
      <span className="pronounce">{props.input.text}</span>
    </div>
  );
}
