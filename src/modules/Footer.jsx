import { Link } from "react-router-dom";

function Footer({aos}) {
 const linksImgs = [
      
    { src: "/Icons_link_insta.png", to: "#" },
    { src: "/Icons_link_telega.png", to: "#" },
    { src: "/Icons_link_tik.png", to: "#" }
 ]
    
return(
     <footer className="footer"data-aos={aos} >
       <div className="footer__links">
          <Link className="header__link" to="/Main">Main</Link>
          <Link className="header__link" to="/Shop">Shop</Link>
          <Link className="header__link" to="/Faq">Faq</Link>
       </div>
       <div className="footer-linksImgs">
       {linksImgs.map((link,index) =>(
        <a key={index} href={link.to} className="footer-linksImgs__links">
            <img src={link.src} alt="icon" className="footer-linksImgs"/>
        </a>
       ))}
       </div>
     </footer>
);






}

export default Footer;