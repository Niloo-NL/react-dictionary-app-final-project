import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <ReactAudioPlayer src={props.input.audio} autoPlay={false} controls />
      <br></br>
      {props.input.text}
    </div>
  );
}
