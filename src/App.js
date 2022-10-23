 import { SideBar } from "./components/SideBar";
 import { Header } from './components/Header';
 import { LoginForm } from './components/LoginForm.js';
 import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
     <SideBar/>
        <Routes>
        <Route path = '/' element = {<SideBar/>}></Route>
        <Route path = '/login' element = {<LoginForm/>}></Route>
        </Routes>
      </BrowserRouter>
      <Header/>
    </div>
  );
}

export default App;
