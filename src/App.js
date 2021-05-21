import logo from './logo.svg';
import './App.css';
import dataValue from './Data';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import InputText from './components/input-text/InputText';

function App() {

  const [isToggle, setIsToggle] = useState(false);
  const toggleMenu = e => {
    setIsToggle(!isToggle);
    console.log("coucou");
  }

  useEffect(() => {

  });
  const show = isToggle ? "show" : "";

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="s-block">
          <h3>Bonjour, que pouvons-nous faire pour vous ?</h3>
        </div>
        <div className="s-block">
          <form className="s-form-content">
            <InputText title="Nom" />
            <InputText title="Prénom" />
            <div className="form-group row s-form-row s-form-submit-row">
              <label className="col-sm-2 col-form-label"></label>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary s-btn-primary col-sm-5">Précedent</button>
                <button type="submit" className="btn btn-primary s-btn-primary col-sm-5 float-end">Etape suivante</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
