import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [errorMessage, setErrorMessage] = useState(false);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setErrorMessage(false);
    setResult(response.data[0]);
  }

  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function handleError() {
    setErrorMessage(
      <section className="error">
        {" "}
        Sorry, the word you are looking for is not in our data base. Please
        check your spelling or look up another word!{" "}
      </section>
    );
  }

  function search(event) {
    event.preventDefault();
    //Dictionary documentation : https://dictionaryapi.dev/
    //Photos documentation : https://www.pexels.com/api/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    let pexelsApiKey =
      "563492ad6f91700001000001a6b1167c27c245f9bbe3b6baf2d87030";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsUrl, { headers: headers }).then(handlePexels);
  }
  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <section>
        <div className="title">What word do you Want to look up?</div>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Type a word"
            onChange={handleChange}
          />
        </form>
      </section>
      {errorMessage}

      <Results input={result} />
      <Photos input={photos} />
    </div>
  );
}
