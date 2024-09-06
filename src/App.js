import logo from './logo.svg';
import './App.css';
import MyResume from './components/MyResume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: '#000000' }}>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<MyResume/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
