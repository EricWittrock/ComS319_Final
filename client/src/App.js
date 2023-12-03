import Header from './components/Header';
import CardHolder from './components/CardHolder';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div id="page">
        <Header />
        <CardHolder />
      </div>
      <Login />
    </div>
  );
}

export default App;
