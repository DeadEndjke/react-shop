import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [basketitems, setBasketitems] = useState([]);
  const [basketitemscount, setBasketitemscount] = useState("");
  const [itemId, setItemId] = useState(0);
  function updateBasketItems(e) {
    setBasketitems((basketitems) => [...basketitems, e]);
    setBasketitemscount(basketitems.length);
    setItemId(itemId + 1);
  }

  function clearBasket() {
    setBasketitems([]);
  }

  useEffect((e) => setBasketitemscount(basketitems.length));

  return (
    <div className="App">
      <div className="container">
        <Header basketitemscount={basketitemscount} />
        <Content
          updateBasketItems={updateBasketItems}
          basketitems={basketitems}
          basketitemscount={basketitemscount}
          itemId={itemId}
          clearBasket={clearBasket}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
