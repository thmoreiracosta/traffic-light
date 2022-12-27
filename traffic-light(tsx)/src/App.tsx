import { Sinalization } from "./components/Sinalization/Sinalization";
import { TrafficLightProps } from "./components/TrafficLight/TrafficLight";

interface Sinalization{
  colors: {
    color: string,
    name: string,
  }
}

export function App(Sinalization) {

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
  )
}


