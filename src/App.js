import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <h1>I am app</h1>
      <Home />
      <Reviews />
      <Dashboard />
      <Blogs />
      <About />
    </div>
  );
}

export default App;
