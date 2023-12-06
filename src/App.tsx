import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureAxios } from "./config/axios";
import "react-toastify/dist/ReactToastify.css";


configureAxios();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< />}>

        </Route>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
