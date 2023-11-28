import Header from './components/Header';
import CardHolder from './components/CardHolder';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div id="page">
        <Header />
        <img src="./headerImg2.png" className="bannerImage" alt="banner" />
        <CardHolder />
      </div>
      <Login />
    </div>
  );
}

export default App;
