import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
    </div>
  );
}
