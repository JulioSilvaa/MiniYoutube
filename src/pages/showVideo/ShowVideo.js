import PlayerDeVideo from 'components/playerDeVideo/PlayerDeVideo';
import VideoList from 'components/videoList/VideoList';
import Container from 'styles/Container';
import * as S from './style';

function ShowVideo() {
   return (
      <Container>
         <S.ShowVideo>
            <PlayerDeVideo />
            <S.Container>
               <VideoList />
            </S.Container>
         </S.ShowVideo>
      </Container>
   );
}

export default ShowVideo;
