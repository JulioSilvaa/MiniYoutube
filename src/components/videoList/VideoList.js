/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function VideoList({ video }) {
   return (
      <S.ContainerListVideos>
         <Link to={`/assistindo`}>
            <S.ContainerCard>
               <div style={{ width: '100%' }}>
                  <img
                     src={video.snippet.thumbnails.high.url}
                     alt="Alps"
                     style={{ width: '50%' }}
                  />
                  <div>
                     <h2>{video.snippet.channelTitle}</h2>
                     <h3>{video.snippet.title}</h3>
                     <p>{video.snippet.description}</p>
                  </div>
               </div>
            </S.ContainerCard>
         </Link>
      </S.ContainerListVideos>
   );
}
