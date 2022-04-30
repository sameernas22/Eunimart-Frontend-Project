import logo from './logo.svg';
import './App.css';
import Users from './Users';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>

        <Route path="/Users/:id" element={<Users />}></Route>
        <Route path="/Users" element={<Users />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
