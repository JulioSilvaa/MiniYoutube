import Header from 'components/header/Header';
import Home from 'pages/home/Home';
import ShowVideo from 'pages/showVideo/ShowVideo';
import Teste from 'pages/teste';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/assistindo/:id" element={<ShowVideo />} />
            <Route path="/teste" element={<Teste />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
