import { Link } from "react-router-dom";
import DiscountCountdown from "../ui/Timer";
import ShopCollection from "../ui/ShopCollection";
import Button from "../ui/Button";
import Footer from "../modules/Footer";




function Main() {

 


  return (
  <div data-aos="zoom-out">
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
      <p className="main__title-container__caption">Limited Sale</p>
      <h1 className="main__title-container__title"><span className="main__title-container--spring">Spring</span>/<span className="main__title-container--summer">Summer</span><span className="main__title-container--date">2026</span></h1>
      <p className="main__title-container__subtitle">All the spring 2026 Ready-to-Wear fashion show</p>
      <Link className="main__title-container__btn" to="/Shop">Buy Now</Link>
      </div>
      </div>
        <div className="timer" data-aos="fade-up">
      <DiscountCountdown className="timer__item" endDate="2025-11-30T23:59:59" />
     </div>
    </div>

    <div className="ShopCollection">
       <h2 className="ShopCollection__title">Shop By Collection</h2>
    <div className="ShopCollection__items">
       <ShopCollection PhotoIndex={0}data-aos="fade-up"/>
       <ShopCollection PhotoIndex={1}data-aos="fade-up"/>
      </div>
          
      <div className="ShopCollection-bestSeller"data-aos="fade-up">
      <h3 className="ShopCollection-bestSeller__title">Best Saller</h3>
      <p className="ShopCollection-bestSeller__subtitle">Top-rated by customers</p>
      <Button className={"ui-button"} children={"buy now"}/>    
    </div>
        <video
        className="ShopCollection-bestSeller__banner" data-aos="fade-up"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/item.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>     
    </div>

     <div className="WinterSale" data-aos="fade-up">
      <h1 className="WinterSale__title">Winter Sale</h1>
      <p className="WinterSale__subtitle">Take 50% off a range of goods <br/> in our and
        of season sale.<br/> All sales final - ends soon!</p>
      <Button className={"ui-button"} children={"Shop sale"}/>
      <ShopCollection className="WinterSale__img"PhotoIndex={2} data-aos="fade-up"/>
     </div>
     <Footer/>  
  </div> 
   
  );
}

export default Main;