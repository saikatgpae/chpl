// import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Mobile from './components/Mobile';
import Address from './components/Address';
import Doc from './components/Doc';
import Bank from './components/Bank';
import Terms from './components/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mobile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
