import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
function App() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestamp={1674345600000}/>
    </div>
  );
}

export default App;
