import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Repositories from "./components/Repositories";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Hero/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='/repositories' element={ <Repositories/> }></Route>
      </Routes>
    </Router>
  );
}

export default App
