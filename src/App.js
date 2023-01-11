// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/adminLogin';
import AdminPortal from './components/AdminPortal';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import UserPortal from './components/userPortal';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminPortal/>}/>
          <Route path='/user/*' element={<UserPortal/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
