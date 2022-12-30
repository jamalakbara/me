import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './routes/Home'

function App() {
  return (
    <>
      <Navbar />
      
      <Home />

      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
      {/* <Route path="/about" component={About} /> */}
    </>
  );
}

export default App;
