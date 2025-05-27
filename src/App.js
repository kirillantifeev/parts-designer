import logo from './logo.svg';
import './App.css';
import { Constructor } from './components/constructor/Constructor';
import { DetailsSettings } from './components/constructor/DetailsSettings/DetailsSettings';
import styles from './App.css'

function App() {
  return (
    <div className="App">
      <header className='container'>
        <h1 className='headerTitle'>Конструктор деталей</h1>
        </header>
      <DetailsSettings/>
      <Constructor/>
    </div>
  );
}

export default App;
