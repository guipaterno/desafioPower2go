import "./App.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

import axios from "axios";

function App() {


  return (
    <div className="container">
    <div className="left">{/* Conteúdo da parte esquerda */}
      <Search/>
      
    </div>
    <div className="right">{/* Conteúdo da parte direita */}
      <Header/>
      
    </div>
  </div>
  );
}

export default App;
