import { useEffect, useRef, useState } from 'react';
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ScrollReveal from 'scrollreveal';
import './App.css';
import ItemCard from './components/article.jsx';
import CategoryCard from './components/categoryCard.jsx';
import FooterContainer from './components/footerContainer.jsx';
import NavLinks from './components/navLinks.jsx';
import SocialLinks from './components/socialLinks.jsx';
import {
  bat, categoryPumpkin,
  cauldron,
  footerTree1,
  footerTree2,
  gohst,
  HalloweenTunes,
  homePumpkin,
  itemApple, itemBroom,
  itemHat,
  itemPumpkin,
  itemSpider,
  scareCrow,
  skull,
  stars, texeture, tree1, tree2,
  wave1,
  wave2,
  witchHat
} from './exports.js';

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [pauseStatus, setPauseStatus] = useState(true)
  const audioRef = useRef(null);

  const playTunes = (event) => {
    if (event.target.classList.contains("play")) {
      audioRef.current.currentTime === 0 && audioRef.current.paused ? (audioRef.current.play(), setPauseStatus(false)) :
        audioRef.current.paused ? (audioRef.current.play(), setPauseStatus(false)) : (audioRef.current.pause(), setPauseStatus(true))
    }
  }

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
      window.scrollY >= 350 && setShowScroll(true)
    } else {
      window.scrollY < 350 && setShowScroll(false)
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // reset: true
  })

  useEffect(() => {
    ScrollReveal().reveal('.home__data, .footer__content, .footer__logo, .footer__description, .footer_logo')
    ScrollReveal().reveal('.logo', { origin: 'top', delay: 500 })
    ScrollReveal().reveal('.home__tree-1', { origin: 'left', delay: 500 })
    ScrollReveal().reveal('.home__tree-2', { origin: 'right', delay: 500 })
    ScrollReveal().reveal('.home__img', { delay: 500 })
    ScrollReveal().reveal('.category__card, .items__card', { interval: 100 })
    ScrollReveal().reveal('.about__img, .about__data, .footer__tree-2', { origin: 'left' })
    ScrollReveal().reveal('.party__images, .party__data, footer__tree-1', { origin: 'right' })
  }, [])


  return (
    <div>
      <img src={texeture} alt="" className='shape__bg' />

      <img src="/logo.webp" className='logo' alt="logo image" />
      {/* <!--==================== HEADER ====================--> */}
      <header className={`header ${scrolled && 'bg-header'}`} id="header">
        <nav className={`nav container ${scrolled && 'separate'}`}>
          <a href="#" className={`${!scrolled && 'hidden'} nav__logo`}>
            <img src="/logo.webp" alt="logo image" />
            <p>The Midnight Graveyard</p>
          </a>

          <div className={`nav__menu ${navOpen ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
              <NavLinks route={'home'} setNavOpen={setNavOpen} title={"Home"} />
              <NavLinks route={'about'} setNavOpen={setNavOpen} title={"About"} />
              <NavLinks route={'items'} setNavOpen={setNavOpen} title={"Itmes"} />
              <NavLinks route={'party'} setNavOpen={setNavOpen} title={"Party"} />
            </ul>

            <div className="nav__close" id="nav-close"
              onClick={() => setNavOpen(false)}>
              <IoClose size={25} />
            </div>

            <img src={bat} alt="nav image" className="nav__img" />
          </div>

          <div className="nav__toggle" id="nav-toggle"
            onClick={() => setNavOpen(true)}>
            <HiMenuAlt2 size={25} />
          </div>
        </nav>
      </header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home section" id="home">
          <div className="shape__small"></div>
          <div className="shape__big"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                <span>Halloween</span> Trick or Treat!!!
                <img src={stars} alt="home image" className='home__title-img-1' />
                <img src={stars} alt="home image" className='home__title-img-2' />
              </h1>

              <p className="home__description">
                This Halloween, enjoy trick—or—treating
                with your friends and spend a terrifying
                night under the full moon.
              </p>

              <a href="#" className="button">Explore now!!!</a>
            </div>

            <img src={homePumpkin} alt="home image" className='home__img' />
            <img src={tree1} alt="home image" className='home__tree-1' />
            <img src={tree2} alt="home image" className='home__tree-2' />
          </div>
        </section>

        {/* <!--==================== CATEGORY ====================--> */}
        <section className="category section" id='category'>
          <h2 className="section__title">Choose your <br /> spookey category</h2>

          <div className="category__container container grid">
            <CategoryCard src={categoryPumpkin} title={"Pumpkins"} description={"Light up horror pumpkins to scare at night"} />
            <CategoryCard src={gohst} title={"Apparitions"} description={"Spooky ghosts to scare in the most haunted houses"} />
            <CategoryCard src={witchHat} title={"Witch Hat"} description={"The most elegant witch hats you can vlear and scare"} />
          </div>
        </section>

        {/* <!--==================== ABOUT ====================--> */}
        <section className="about section" id="about">
          <div className="shape__small"></div>
          <div className="shape__big"></div>
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title"></h2>
              <p className="about__description">
                Halloween is celebrated every October 31 at night,
                walk around the city with your friends and trick or treat,
                enjoy this celebration under the full moon.
              </p>
              <a href="#" className="button">Know More!!!</a>
            </div>
            <img src={scareCrow} alt="about image" className="about__img" />
          </div>
        </section>

        {/* <!--==================== ITEMS ====================--> */}
        <section className="items section" id="items">
          <h2 className="section__title">Select your <br /> accursed item</h2>
          <div className="items__container container grid">
            <ItemCard src={itemApple} title={"Poisoned Apple"} price={"4.99"} />
            <ItemCard src={itemBroom} title={"Wicked Broom"} price={"12.99"} />
            <ItemCard src={itemPumpkin} title={"Pumpkin"} price={"7.99"} />
            <ItemCard src={itemSpider} title={"Spooky Spider"} price={"9.99"} />
            <ItemCard src={itemHat} title={"Witch Hat"} price={"15.99"} />
          </div>
        </section>

        {/* <!--==================== PARTY ====================--> */}
        <section className="party section" id="party">
          <div className="party__container container grid">
            <div className="party__data">
              <h2 className="section__title">Halloween <br /> party 31 October</h2>

              <p className="party__description">
                Organize a great Halloween party and
                enjoy the creepiest night of terror
                with all your friends.
              </p>

              <a href="#" className="button">Join The Party!!!</a>
            </div>
            <div className="party__images">
              <img src={cauldron} alt="party image" className="party__img" />

              <img src={stars} alt="party image" className="party__star-1" />
              <img src={stars} alt="party image" className="party__star-2" /></div>
          </div>
        </section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer section">
        <div className="shape__small"></div>
        <div className="shape__big"></div>
        <div className="footer__container ft_main container grid">
          <div>
            <a href="#" className="footer__logo">
              <img src={skull} alt="logo image" />
              Halloween
            </a>

            <p className="footer__description">Enjoy the spookiest <br /> night of your life.</p>
          </div>

          <div className="footer__content">
            <FooterContainer title={"About Us"} links={['About Us', 'Features', 'News & Blog']} />
            <FooterContainer title={"Services"} links={['Pricing', 'Discounts', 'Rewards']} />
            <FooterContainer title={"Company"} links={['Blog', 'Celebrations', 'Jobs']} />

            <div>
              <h3 className="footer__title">Social Media</h3>

              <ul className="footer__social">
                <SocialLinks link={"https://www.twitter.com"} iconClasses={"fa-brands fa-x-twitter"} />
                <SocialLinks link={"https://www.instagram.com"} iconClasses={"fa-brands fa-instagram"} />
                <SocialLinks link={"https://www.github.com/Steeve26"} iconClasses={"fa-brands fa-github"} />
              </ul>
            </div>
          </div>

          <img src={footerTree1} alt="footer image" className='footer__tree-1' />
          <img src={footerTree2} alt="footer image" className='footer__tree-2' />
        </div>
        <div>
           <img src="/logo.webp" className='footer_logo' alt="logo image" />
          <span className="footer__copy">&copy; Copyright SteveBro. All rights reserved</span>
        </div>
      </footer>

      {/* <!--========== SCROLL UP ==========--> */}
      <a href="#home" className={`scrollup ${showScroll && 'show-scroll'}`} id="scroll-up">
        <i className="fa-solid fa-arrow-up" style={{ fontSize: '1.5rem' }}></i>
      </a>

      <audio style={{ opacity: '0', pointerEvents: 'none' }} ref={audioRef} src={HalloweenTunes} loop />
      <button className={`play ${!showScroll && 'adjust'}`} onClick={playTunes}>
        {pauseStatus ?
          <>
            <img className={'wave'} src={wave1} width={'53%'} alt="sound wave" style={{ pointerEvents: 'none' }} />
            <img className={'wave'} src={wave2} width={'66%'} alt="sound wave" style={{ pointerEvents: 'none' }} />
          </> :
          <svg id="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 38.05">
            <title>Audio Wave</title>
            <path id="Line_1" data-name="Line 1" d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z" />
            <path id="Line_2" data-name="Line 2" d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z" />
            <path id="Line_3" data-name="Line 3" d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z" />
            <path id="Line_4" data-name="Line 4" d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z" />
            <path id="Line_5" data-name="Line 5" d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z" />
          </svg>
        }
      </button>
    </div>
  )
}

export default App
