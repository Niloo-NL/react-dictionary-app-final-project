import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Dictionary</h1>
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://niloofar-navaiee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Niloofar Navaiee.L
          </a>{" "}
          and is an open-source on{" "}
          <a
            href="https://github.com/Niloo-NL/react-dictionary-app-final-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
