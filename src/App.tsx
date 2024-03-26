import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './Pages/HomePage/HomePage';
import './app.scss';

function App() {
  return (
    <div className="app">
      <span className="bubble bubble-first" />
      <span className="bubble bubble-second" />
      <span className="bubble bubble-third" />
      <span className="bubble bubble-fourth" />
      <span className="bubble bubble-six" />
      <Header />
      <div className="content">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
