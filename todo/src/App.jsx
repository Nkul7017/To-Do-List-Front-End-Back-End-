import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import Create from './components/CreateAccount'
import Login from './components/Login'
import Notes from './components/Notes'
import Mynotes from './components/Mynotes'
function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/Create" element={<Create/>}/>
   <Route path="/Notes/:id" element={<Notes/>}/>
   <Route path="/Mynotes/:id" element={<Mynotes/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
