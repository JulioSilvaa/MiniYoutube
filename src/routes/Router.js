import Header from 'components/header/Header';
// import GlobalState from 'contexts/State';
import Home from 'pages/home/Home';
import ShowVideo from 'pages/showVideo/ShowVideo';
import Teste from 'pages/teste';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'styles/Container';

function Router() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
         <Container>
            <Routes>
               <Route path="/assistindo/:id" element={<ShowVideo />} />
            </Routes>
         </Container>
         <Routes>
            <Route path="/teste" element={<Teste />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
