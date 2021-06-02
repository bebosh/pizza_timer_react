import "./App.css";
import PizzaTimer from "./components/PizzaTimerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Pizza Party countdown</h3>
        <PizzaTimer />
      </header>
    </div>
  );
}

export default App;
