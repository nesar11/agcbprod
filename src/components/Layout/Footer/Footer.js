import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {

   return (
      <footer style={{ backgroundImage: `url(${'assets/img/bg/footer-bg.jpg'})` }} className="pt-95 position-relative">
         <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
         </div>
         <div className="footer-area pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 col-sm-6">
                     <div className="widget mb-30">
                        <div className="footer-logo mb-25">
                           <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="footer-logo" /></a></Link>
                        </div>
                        <p className="mb-20 pr-35">There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words.</p>
                        <div className="footer-social">
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a> <br></br>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                           <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'telegram']} /></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                     <div className="widget mb-30">
                        <h4 className="widget-title mb-35">Site Maps</h4>
                        <ul>
                           <li><Link href="/service"><a>Home</a></Link></li>
                           <li><Link href="/about"><a>Company Info</a></Link></li>
                           <li><Link href="/project"><a>Product</a></Link></li>
                           <li><Link href="/contact"><a>Media</a></Link></li>
                           <li><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="widget widget-contact mb-30">
                        <h4 className="widget-title mb-35">Contact</h4>
                        <ul>
                           <li className="pb-10">Suite 11, 12, 13 & 14 <br></br>
                              Level 2, Resource Centre <br></br>
                              Technology Park Malaysia <br></br>
                              57000 Bukit Jalil, Kuala Lumpur <br></br>
                              Malaysia</li>
                           <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img" /><a href="mailto:needhelp@company.com">info@al-ebreizglobal.com</a></li>
                           <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:+603-8992-3030">+603-8992-3030</a></li>
                           <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:+6011-1133-5693">+6011-1133-5693</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3  col-sm-5">
                     <div className="widget " style={{ width:'80%',}}>
                    
                                <img src="assets/img/icon/drsimage-png.png" className="img-fluid" alt="about-icon"/>
                                
                    
                                </div>
                                <div className="widget "  style={{ width:'80%'}}>
                               <br></br> <img src="assets/img/icon/Fatca-final.png" className="img-fluid" alt="about-icon"/>
                    
                
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <FooterBottom />
      </footer>
   );
}

export default Footer;