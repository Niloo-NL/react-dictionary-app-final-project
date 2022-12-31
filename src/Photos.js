import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.input) {
    return (
      <section className="photos">
        <h3 className="title"> Related Images:</h3>
        <div className="row">
          {props.input.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
