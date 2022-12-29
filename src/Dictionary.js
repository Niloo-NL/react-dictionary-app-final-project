import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //documentation : https://dictionaryapi.dev/
    let apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord} `;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <section>
        <div className="title">What word do you Want to look up</div>
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={handleChange} />
        </form>
      </section>
      <Results input={result} />
    </div>
  );
}
