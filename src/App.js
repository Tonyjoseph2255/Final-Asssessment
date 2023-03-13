
import './App.css';


import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Login from './component/Account/Login/Login';
import Dashboard from './component/features/dashboard/Dashboard';

import PasswordForm from './component/Account/forgot-password/PasswordForm';
import Todo from './component/features/todos/Todo';
import User from './component/common/User';
import Post from './component/features/posts/Post';
import Product from './component/features/products/Product';
import Reg from './component/Account/register/Reg';




function App() {
  return (
   <div>
     <Router>
      <Routes>
      <Route exact path="/registration" element={<Reg/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/password" element={<PasswordForm/>} />
      <Route exact path="/posts" element={<Post/>} />
      <Route exact path="/products" element={<Product/>} />
      <Route exact path="/userListing" element={<User/>} />
      <Route exact path="/todo" element={<Todo/>} />
      

      </Routes>
      </Router>
      
      
       {/* <Product></Product> */}

    </div>
  );
}

export default App;

