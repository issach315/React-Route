import Home from '../src/MyComponents/Home'
import Contact from '../src/MyComponents/Contact'
import About from '../src/MyComponents/About'
import { Route,Routes } from 'react-router-dom';
import Navbar from './MyComponents/Navbar';
function App() {
  return (
    <div className="App">

    <div>
      <Navbar />
    </div>

      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
