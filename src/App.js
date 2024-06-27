import logo from './logo.svg';
import './App.css';
import AddSubsciber from './components/AddSubsciber';
import SearchSubscribers from './components/SearchSubscribers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSubscriber from './components/DeleteSubscriber';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddSubsciber/>}/>
    <Route path="/search" element={<SearchSubscribers/>}/>
    <Route path="/delete" element={<DeleteSubscriber/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
