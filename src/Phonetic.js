import React from "react";
//import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <AudioPlayer
        autoPlay={false}
        src={props.input.audio}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
        hasDefaultKeyBindings={false}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        defaultCurrentTime=""
        defaultDuration=""
      />
      <br></br>
      {props.input.text}
    </div>
  );
}
