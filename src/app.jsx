import Header from "./modules/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./modules/Main";
import Shop from "./modules/Shop";
import Faq from "./modules/Faq";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
      
      
      </div>
  );
}

export default App;