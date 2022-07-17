import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
