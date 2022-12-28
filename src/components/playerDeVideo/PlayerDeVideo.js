import video from 'assets/videos/video1.mp4';

export default function PlayerDeVideo() {
   return (
      <div style={{ width: '600', backgroundColor: 'lightblue' }}>
         <div>
            <video width="600" height="400" controls>
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
