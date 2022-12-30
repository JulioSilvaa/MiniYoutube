/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import youtubeApi from 'services/youtube';
import GlobalContext from './Global';

function GlobalState(props) {
   const [videos, setVideos] = useState([]);

   const filterImage = () => {
      youtubeApi
         .get(`/search`)
         .then((res) => setVideos(res.data.items))
         .catch((err) => console.error(err));
   };

   const data = {
      filterImage,
      videos,
   };

   console.log(data);

   return (
      <GlobalContext.Provider value={data}>
         {props.children}
      </GlobalContext.Provider>
   );
}

export default GlobalState;
