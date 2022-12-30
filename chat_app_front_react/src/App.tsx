import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { ConversationPage } from './pages/ConversationPage.tsx';
import {ConversationChannelPage} from './pages/ConversationChannelPage.tsx'
function App() {
  return (
    <>
       <Routes>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route
          path="conversations"
          element={<ConversationPage/>}>
          <Route path=":id" element={<ConversationChannelPage/>} /> 
          </Route>
          </Routes>
    </>
  );
}

export default App;
