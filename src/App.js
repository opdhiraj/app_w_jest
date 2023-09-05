import "./App.css";
import Application from "./components/application/Application";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Home name="OM" />
      <hr />
      <Application />
    </div>
  );
}

export default App;
