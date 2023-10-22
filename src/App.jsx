import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Layout from './pages/Layout.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {


  return (
    <BrowserRouter className="bg-info">
      <Routes>
        <Route path='/'element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='services' element={<Services />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
