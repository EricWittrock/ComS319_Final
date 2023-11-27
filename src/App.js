import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <img src="./headerImg2.png" className="bannerImage" alt="banner" />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
