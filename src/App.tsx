import "./App.css";

//components Props
import Props from "./components/Props";
//components UseState
import UseState from "./components/UseState";
//components UseState
import UnionTypes from "./components/UnionTypes";
//components Eventos tipados
import EventosTipados from "./components/EventosTipados";

//Projeto Final
import Projeto from "./ProjetoSemana/Projeto";

function App() {
  return (
    <div>
      <Props />
      <UseState />
      <UnionTypes />
      <EventosTipados />
      <Projeto />
    </div>
  );
}

export default App;
