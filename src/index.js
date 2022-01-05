import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div style={styles.appdiv}>
      <h1>Welcome to Pecker</h1>
    </div>
  );
}

const styles = {
  appdiv: {
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
