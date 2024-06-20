import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          This project was coded by Irina Wilson and open-sourced on{" "}
          <a
            href="https://github.com/IrinaWilson/shecodes-weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
