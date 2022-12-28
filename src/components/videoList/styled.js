import styled from 'styled-components';

export const ContainerListVideos = styled.div`
   display: grid;
   text-align: center;
   justify-content: center;
   align-items: center;
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   padding: 20px;
   gap: 12px;

   img {
      display: inline-block;
   }
`;

export const ContainerCard = styled.div`
   width: 100%;
   background-color: #fff;
   padding: 10px;
`;
