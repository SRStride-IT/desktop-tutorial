import './App.css';

function SecondComponent() {
  return (
    <h2>Hello this Bhavana</h2>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello Stride IT
      </header>

      <div className="App-main">
        <SecondComponent />
      </div>
    </div>
  );
}

export default App;