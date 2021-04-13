import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Header from "./components/Header";
function App() {
  return (
    <div>
    <Header/>
    <Navbar />
    <Routes />
    </div>
  );
}

export default App;
