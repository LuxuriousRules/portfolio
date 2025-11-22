import { Link } from "react-router-dom";
import Timer from "../ui/Timer";

function Main() {
  return (
  <div data-aos="fade-zoomin">
    <div className="main">
      <video
        className="main__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/banner.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div data-aos="zoom-out">
      <div className="main__title-container">
      <p className="main__title-container__caption">Limeted Sale</p>
      <h1 className="main__title-container__title"><span className="main__title-container--spring">Spring</span>/<span className="main__title-container--summer">Summer</span><span className="main__title-container--date">2026</span></h1>
      <p className="main__title-container__subtitle">All the spring 2026 Ready-to-Wear fashion show</p>
      <Link className="main__title-container__btn" to="/Shop">Buy Now</Link>
      </div>
      </div>
        <div className="timer">
      <Timer className="timer__item"/>
     </div>
    </div>
  </div> 
    
  );
}

export default Main;