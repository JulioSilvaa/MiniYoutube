import video from 'assets/videos/video1.mp4';
import './style.css';

export default function PlayerDeVideo() {
   return (
      <div className="player-wrapper">
         <div>
            <video className="react-player" controls autoPlay>
               <track kind="captions" />
               <source src={video} />
            </video>
         </div>
         <div>
            <h2>Título</h2>
            <p style={{ overflow: 'hidden' }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
               iure neque ut architecto eligendi minima nam inventore, explicabo
               eos reprehenderit iste cum a earum assumenda accusamus amet, est
               molestiae? Architecto?
            </p>
         </div>
      </div>
   );
}
