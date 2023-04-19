import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useUsers } from "./providers/Users";

function App() {

  const { token } = useUsers();


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={!!token ? <Navigate to="/" /> : <Auth/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
