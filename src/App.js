import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import PersonalInformation from './Pages/PersonalInformation';
import GeneralInformation from './Pages/GeneralInformation';
import ProductInformation from './Pages/ProductInformation';
import Agreement from './Pages/Agreement';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<PersonalInformation/>}/>
      <Route path='generalinformation' element={<GeneralInformation/>}/>
      <Route path='productInformation' element={<ProductInformation/>}/>
      <Route path='agreement' element={<Agreement/>}/>
    </Routes>
    </>
  );
}

export default App;
