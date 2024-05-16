import Register from 'pages/Auth/Register';
import Home from 'pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { addUser } from 'redux/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {/* react-router-dom apply */}
      <Router>
        <Routes>
          <Route path="/register" Component={Register} />
          <Route path="/" Component={Home} />
          <Route path="*" Component={() => <h1>Error 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
