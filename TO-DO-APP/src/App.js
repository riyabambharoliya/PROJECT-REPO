import './App.css';
// import Images from './Images';
// import Inputchange from './Inputchange';
import Addusers from './Addusers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Adddata from './Adddata';
import Editdata from './Editdata';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addusers/>}></Route>
      <Route path='/add' element={<Adddata/>}></Route>
      <Route path='/edit/:id' element={<Editdata/>}></Route>
    </Routes>
    </BrowserRouter>

      {/* <Inputchange></Inputchange> */}
    {/* <Images></Images> */}
    </div>
  );
}

export default App;
