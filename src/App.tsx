import './App.css'
import { Route, Routes } from 'react-router-dom'
import  ErrorPage from "./Pages/ErrorPage";
import usePersistedState from './Utils/usePersistedstate';
import { createContext } from 'react';




function App() {

  return (
      <Routes>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}

export default App
