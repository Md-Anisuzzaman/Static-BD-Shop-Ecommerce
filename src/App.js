import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';





function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
