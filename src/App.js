import "./App.css";
import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Users from "./components/users/Users";
// import skillslist from "./components/skills/skillslist";
import CounterTwo from "./hooks/counterTwo/CounterTwo";
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
      <CounterTwo />
      <hr />
      <Users />
    </div>
  );
}

export default App;
