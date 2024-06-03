import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import Authors from './Authors';
import SelectedAuthor from './SelectedAuthor';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/blogs/find/:id" element={<BlogDetails />} />
            <Route path="/blogs/find/author/:aid" element={<SelectedAuthor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;