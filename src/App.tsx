import "./App.css";

//components Props
import Props from "./components/Props";
//components UseState
import UseState from "./components/UseState";
//components UseState
import UnionTypes from "./components/UnionTypes";
//components Eventos tipados
import EventosTipados from "./components/EventosTipados";

function App() {
  return (
    <div>
      <Props />
      <UseState />
      <UnionTypes />
      <EventosTipados />
    </div>
  );
}

export default App;
