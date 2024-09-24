import logo from "./logo.svg";
import Footer from './Footer';
import Header from './Header';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: "36px", height: "128px", width: "90vw" }}>
        REMOTE APP
      </div>
      <Footer />
    </div>
  );
}

export default App;
