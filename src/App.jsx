import React from 'react';
import RegisterPage from './pages/register/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import SuccessPurchase from './pages/successPurchase';
import EmailReset from './pages/resetpassword-emailreset';
import NewPass from './pages/resetpassword-newpass';
import AfterClass from './pages/afterclass/afterclass';
import ListMenuKelas from './pages/listmenukelas';
import DetailClass from './pages/detailclass/detailclass';
import Checkout from './pages/checkout';
import LandingPage from './pages/landingpage/landingpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/Success-purchase' element={<SuccessPurchase/>}/>
        <Route path='/resetpassword-emailreset' element={<EmailReset/>}/>
        <Route path='/resetpassword-newpass' element={<NewPass/>}/>
        <Route path='/afterclass' element={<AfterClass/>}/>
        <Route path='/landingpage' element={<LandingPage/>}/>
        <Route path="/list-menu-kelas/:id" element={<ListMenuKelas/>} />
        <Route path="/detail-kelas" element={<DetailClass/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
};

export default App;
