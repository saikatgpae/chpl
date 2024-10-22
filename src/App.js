/* eslint-disable */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Mobile from './components/mobile/Mobile';
import Address from './components/address/Address';
import Doc from './components/doc/Doc';
import Bank from './components/bank/Bank';
import Terms from './components/terms/Terms';

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
