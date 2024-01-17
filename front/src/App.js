import './App.css';
import { Route, Routes } from "react-router-dom";
import AllCatgeries from './Pages/AllCategories/AllCatgeries';

function App() {
  return (
    <Routes>
       <Route path='/' element={<AllCatgeries/>}/>
    </Routes>
  );
}

export default App;
