import './Styles/App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
//changed about to About
import NOTFound from './pages/error/404';
import HeaderComponent from './components/headerComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
  
      <BrowserRouter>
      <Routes >
        <Route path= "/" element={<Home/>}></Route>
        <Route path="/" element={<About/>}></Route>
        <Route path="*" element={<NOTFound/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
      
    
      
    </div>
  );
}

export default App;
