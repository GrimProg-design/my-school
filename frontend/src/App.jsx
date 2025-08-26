import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Get from "./components/Get";
import Header from "./components/Header";
import Post from "./components/Post";
import User from "./components/User";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/get" replace />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post/>}/>
        <Route path="/users" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
