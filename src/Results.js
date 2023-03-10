import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.input) {
    return (
      <div className="results">
        <section>
          <h2>{props.input.word}</h2>

          <Phonetic input={props.input.phonetics} />
        </section>

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
