import logo from './assets/image/logo_gal.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es una aplicación realizada por Francisco Tiez para examen de seleccion de Banco Galicia.
        </p>
      </header>
    </div>
  );
}

export default App;
