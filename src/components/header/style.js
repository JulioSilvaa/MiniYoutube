import styled from 'styled-components';

export const CHeader = styled.div`
   display: flex;
   justify-content: space-between;
   justify-items: center;
   align-items: center;
   padding: 0 20px;
   background-color: ${({ bg }) => bg};
   height: 80px;
   flex-wrap: wrap;
   position: sticky;
   top: 0;
   z-index: 999;
   transition: all ease 0.8s;
   opacity: 0.8;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const logo = styled.img`
   max-width: 30%;
   border-radius: 8px;
`;

export const avatar = styled.div`
   width: 50px;

   img {
      max-width: 100%;
      border-radius: 50%;
      cursor: pointer;
      color: red;
   }
`;
