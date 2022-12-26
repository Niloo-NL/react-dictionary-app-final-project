import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.input) {
    return (
      <div className="results">
        <h2>{props.input.word}</h2>
        {props.input.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
