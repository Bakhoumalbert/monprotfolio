import "./App.css";
import { Competences } from "./screens/Competences";
import { Contact } from "./screens/Contacts";
import { Home } from "./screens/Home";
import { Portfolio } from "./screens/Portfolio";
import { Propos } from "./screens/Propos";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="">
        <nav className="h-24 flex mb-5 justify-center bg-[#4D686D] ">
          <NavLink className="mr-5 font-extrabold" to="/">
            Accueil
          </NavLink>
          <br />
          <NavLink className="mr-5 font-extrabold" to="/propos">
            A propos
          </NavLink>
          <br />
          <NavLink className="mr-5 font-extrabold" to="/competences">
            competences
          </NavLink>
          <br />
          <NavLink className="mr-5 font-extrabold" to="/portfolio">
            portfolio
          </NavLink>
          <br />
          <NavLink className="mr-5 font-extrabold" to="/contacts">
            contacts
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
