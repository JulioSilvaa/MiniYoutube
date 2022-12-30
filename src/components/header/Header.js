import avatar from 'assets/image/avatar.png';
import logo from 'assets/image/logo.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function Header() {
   const [blackHeader, setBlackHeader] = useState(false);

   useEffect(() => {
      const scrollListener = () => {
         if (window.scrollY > 10) {
            setBlackHeader(true);
         } else {
            setBlackHeader(false);
         }
      };
      window.addEventListener('scroll', scrollListener);
      return () => {
         window.removeEventListener('scroll', scrollListener);
      };
   }, []);

   function setInputSearch(e) {
      e.preventDefault();
      console.log(e);
   }
   function handleSubmit() {
      console.log();
   }

   return (
      <S.CHeader bg={!blackHeader ? '#fff' : '#f8f8ff'}>
         <div>
            <Link to="/">
               <S.logo src={logo} alt="logo" />
            </Link>
         </div>
         <div>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="Buscar..."
                  onChange={(e) => setInputSearch(e.target.value)}
                  value="asda"
               />
            </form>
         </div>
         <div>
            <S.avatar>
               <img src={avatar} alt="" />
            </S.avatar>
         </div>
      </S.CHeader>
   );
}

export default Header;
