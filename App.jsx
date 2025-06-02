import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;