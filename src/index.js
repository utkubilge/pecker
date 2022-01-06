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
        <Link to="/">{" "}Home</Link> |{' '}
        <Link to="/app">App</Link> |{' '}
        <Link to="/counter">Counter</Link>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="app" element={<App />} />
      <Route path="counter" element={<Counter />} />
    </Routes>

  </BrowserRouter>
  ,
  document.getElementById('root')
);
