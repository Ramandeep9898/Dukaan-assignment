import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/main/Main";
import { Feature } from "./components/Features/Feature.jsx";
import { Product } from "./components/Products/Product";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Feature />
      <Product />
      <Footer />
    </>
  );
}

export default App;
