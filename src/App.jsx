import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Message from "./pages/Message/Message";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Message />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
