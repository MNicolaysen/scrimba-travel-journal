import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

function App() {
  const dataArr = data.map(country => {
    return (
      <Card
        key={country.id}
        {...country}
      />
    );
  })

  return (
    <div className="app">
      <Header />
      {dataArr}
    </div>
  );
}

export default App;
