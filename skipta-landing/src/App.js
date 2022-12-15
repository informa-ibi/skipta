import head from './components/Header'
import banner from './components/Banner'
import layout from './components/Layouts'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      < head.Header />
      < banner.TopBanner />
      < layout.StatusCount />
      < layout.Collaboration />

    </div>
  );
}

export default App;
