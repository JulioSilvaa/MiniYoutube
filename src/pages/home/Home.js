import VideoList from 'components/videoList/VideoList';
import GlobalContext from 'contexts/Global';
import { useContext } from 'react';

export default function Home() {
   const { filterImage, videos } = useContext(GlobalContext);

   const videoList =
      videos &&
      videos.map((video) => <VideoList video={video} key={video.id.videoId} />);

   return (
      <>
         <button type="button" onClick={() => filterImage()}>
            clique
         </button>

         {videoList}
      </>
   );
}
