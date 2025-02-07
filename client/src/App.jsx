import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Singup from "./pages/Singup";
import Login from "./pages/Login";

function App() {

  return (
    <>
    
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Singup/>}/>

      </Routes>  
    </>
  )
}

export default App;
