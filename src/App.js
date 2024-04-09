import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './componenets/home';
import AboutUs from './componenets/aboutus';
import ContactUs from './componenets/contactus';
import Service from './componenets/service';


function App() {
  return (
   <div className="App"> 
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
