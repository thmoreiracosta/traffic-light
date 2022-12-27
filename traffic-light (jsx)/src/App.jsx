import { Sinalization } from "./components/Sinalization/Sinalization";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Sinalization 
        colors={[
          { color: "red", name: "Vermelho" },
          { color: "yellow", name: "Amarelo" },
          { color: "lime", name: "Verde" },
        ]}
      />
    </div>
  );
}

export default App;
