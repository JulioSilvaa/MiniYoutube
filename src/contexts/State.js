/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react';
import youtubeApi from 'services/youtube';
import GlobalContext from './Global';

function GlobalState(props) {
   const [videos, setVideos] = useState([]);

   const filterImage = () => {
      youtubeApi
         .get(`/videos`)
         .then((res) => setVideos(res.data.items))
         .catch((err) => console.error(err));
   };

   const data = useMemo(() => ({ filterImage, videos }), []);

   return (
      <GlobalContext.Provider value={data}>
         {props.children}
      </GlobalContext.Provider>
   );
}

export default GlobalState;
