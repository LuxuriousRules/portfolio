import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 600);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  // следим за шириной окна
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 600;
      setIsDesktop(desktop);
      if (desktop) {
        setIsOpen(true); // на десктопе меню всегда открыто
      } else {
        setIsOpen(false); // на мобиле меню скрыто по умолчанию
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // вызвать при монтировании

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // анимация бургер ↔ крест (только для мобилы)
  useEffect(() => {
    if (!isDesktop) {
      if (isOpen) {
        gsap.to(".line1", { rotate: 45, y: 6, duration: 0.3 });
        gsap.to(".line2", { opacity: 0, duration: 0.3 });
        gsap.to(".line3", { rotate: -45, y: -6, duration: 0.3 });
        gsap.fromTo(
          ".header__menu",
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      } else {
        gsap.to(".line1", { rotate: 0, y: 0, duration: 0.3 });
        gsap.to(".line2", { opacity: 1, duration: 0.3 });
        gsap.to(".line3", { rotate: 0, y: 0, duration: 0.3 });
        gsap.to(".header__menu", { y: -50, opacity: 0, duration: 0.4 });
      }
    }
  }, [isOpen, isDesktop]);

  // анимация заголовка
  useEffect(() => {
    gsap.fromTo(
      ".header__title span",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.5,
      }
    );
  }, []);

  return (
    <header className="header">
      {/* бургер показываем только на мобиле */}
      {!isDesktop && (
        <div className="header__burger" onClick={toggleBurger}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      )}
    
      <div className="header__brand">
        <h1 className="header__title">
          <span>C</span>
          <span>O</span>
          <span>C</span>
          <span>A</span>
          <span>!</span>
          <span>N</span>
          <span>E</span>
        </h1>
      </div>

      {isOpen && (
        <nav className="header__menu">
          <Link className="header__link" to="/Main">Main</Link>
          <Link className="header__link" to="/Shop">Shop</Link>
          <Link className="header__link" to="/Faq">Faq</Link>
        </nav>
      )}
    
    </header>
  );
}

export default Header;