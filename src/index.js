import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/app/App";
import Counter from "./routes/counter/Counter";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className='indexback'>
      <br />
      Welcome to home, pecker
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <div className='indexdiv'>
      <h1>Pecker</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem', margin: "auto" }}>
        <Link to="/pecker">{" "}Home</Link> |{' '}
        <Link to="/pecker/app">App</Link> |{' '}
        <Link to="/pecker/counter">Counter</Link>
      </nav>
    </div>
    <Routes>
      <Route path="pecker" element={<Home />} />
      <Route path="pecker/app" element={<App />} />
      <Route path="pecker/counter" element={<Counter />} />
    </Routes>

  </BrowserRouter>
  ,
  document.getElementById('root')
);
