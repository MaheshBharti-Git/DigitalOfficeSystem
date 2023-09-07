import "./components/star.css"
import LogIn_Page from './components/LogIn_Page';
import Tableform1 from './components/Tableform1';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
         <Routes>
              <Route path = '/' element = <LogIn_Page/> />
              <Route path = 'form' element = <Tableform1/> /> 
         </Routes>
    
    </>
  
  );
}
export default App;
