
import './App.css';
import Pizza from './components/PizzaComponent';
import PizzaTimer from './PizzaTimerContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Pizza Party countdown</h3> 
        < Pizza />
       < PizzaTimer />
      </header>
    </div>
  );
}

export default App;
