// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllRouter from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
