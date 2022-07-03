import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import HeaderSearch from './HeaderSearch';

const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [searchOpen, setSearchOpen] = useState(false)

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => {
      setPath(router.pathname)
   }, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });

   const sticky = (e) => {
      const header = document.querySelector('.transparent-header');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
   };
   // Sticky Menu Area End

   return (
      <React.Fragment>
         <Head>
         <title>Al Ebreiz Global Capital Berhad | The Future of Islamic Hyebrid Finance</title>
            <link rel="shortcut icon" href="assets/img/logo/favicon.ico" /> 
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
         </Head>
         <header>
            <div className="transparent-header">
               <div className="container-fluid">
                  <div className="header-space">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-8">
                           <div className="header-logo">
                              <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="logo-img" /></a></Link>
                           </div>
                        </div>
                        <div className="col-xl-6 col-4">
                           <div className="main-menu d-xl-block d-none">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="menu-item-has-children"><Link href="/"><a>Home</a></Link>
                                       
                                    </li>
                                   
                                    <li className="menu-item-has-children"><Link href="#"><a>Company info</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/about"><a>About</a></Link></li>
                                          <li><Link href="/service-details"><a>Shariya Complice</a></Link></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="#"><a>Products</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/product"><a>Gold</a></Link></li>
                                          <li><Link href="/project-details"><a>Silver</a></Link></li>
                                          <li><Link href=""><a>AlaDeen Gold</a></Link></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="/blog"><a>Media</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/blog"><a>News</a></Link></li>
                                          <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                                          <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                       </ul>
                                    </li>
                                    <li><a href="#">Contact</a>
                                       <ul className="sub-menu">
                                         
                                          <li><Link href="#"><a>Privacy Policy</a></Link></li>
                                          <li><Link href="/about"><a>About</a></Link></li>
                                          <li><Link href="/faq"><a>FAQ</a></Link></li>
                                          <li><Link href="/contact"><a>Contact</a></Link></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="side-menu-icon d-xl-none text-end">
                              <a className="search-btn nav-search search-trigger" href="#!" onClick={() => { setSearchOpen(!searchOpen) }}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                              <button className="side-toggle" onClick={() => { setMenuOpen(!menuOpen) }}><i><FontAwesomeIcon icon={['fas', 'bars']} /></i></button>
                           </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                           <div className="header-right text-end">
                              <div className="header-social">
                                 <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                 <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                 <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                 <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                              </div>
                              <div className="header-search">
                                 <a className="search-btn nav-search search-trigger" href="#!" onClick={() => { setSearchOpen(!searchOpen) }}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                              </div>
                              <div className="header-btn">
                                 <Link href="/about"><a className="theme-btn theme-btn-small">Free Estimate</a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

            <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>

         </header>
      </React.Fragment>
   );
}

export default Header;