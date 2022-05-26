import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addstudent from './component/Addstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchstudent from './component/Searchstudent';
import Viewall from './component/Viewall';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addstudent/>}/>
          <Route path='/search' exact element={<Searchstudent/>}/>
          <Route path='/view' exact element={<Viewall/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
