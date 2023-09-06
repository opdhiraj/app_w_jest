import "./App.css";
import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
// import skillslist from "./components/skills/skillslist";

function App() {
  let skillslist = ["HTML", "CSS", "JS", "re"];
  return (
    <div className="App">
      <Home name="OM" />
      <hr />
      <Application />
      <hr />
      <Skills skillslist={skillslist} />
      <hr />
      <Counter />
      <hr />
    </div>
  );
}

export default App;
