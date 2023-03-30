import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import Chat from './components/Chat';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <AppBody>
        <SideBar/>
        <Chat/>
      <Routes>
        <Route path="/"   />
        
      </Routes>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;

`