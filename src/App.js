import './App.css';
import NavBar from "./components/NavBar";
import Counters from "./components/counters";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
     <Counters />
      </main>
    </div>
  );
}

export default App;
