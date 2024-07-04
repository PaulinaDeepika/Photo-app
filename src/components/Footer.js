import React from 'react'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-link_div'>
                    <h4>Quick Links</h4>
                    <a href='/home'>
                        <p>Home</p>
                    </a>
                    <a href='/about'>
                        <p>Share</p>
                    </a>
                    <a href='/product'>
                        <p>About</p>
                    </a>
                    <a href='/contact'>
                        <p>Login</p>
                    </a>
                </div>
                <div className='sb_footer-link_div'>
                    <h4>Extra Links</h4>
                    <a href='/login'>
                        <p>Login</p>
                    </a>
                    <a href='/register'>
                        <p>Register</p>
                    </a>
                </div>
                <div className='sb_footer-link_div'>
                    <h4>Location</h4>
                    <a href='/india'>
                        <p>India</p>
                    </a>
                    <a href='/usa'>
                        <p>USA</p>
                    </a>
                    <a href='/japan'>
                        <p>Japan</p>
                    </a>
                    <a href='/america'>
                        <p>America</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Contact Info</h4>
                    <a href='/+9008005454'>
                        <p>+9008005454</p>
                    </a>
                    <a href='/example@gmail.com'>
                        <p>Photo gallery@gmail.com</p>
                    </a>
                    <a href='/Coimbatore,india'>
                        <p>Coimbatore,India</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Coming Soon On</h4>
                    <div className='socialmedia'>
                    <a href="/facebook">
                    <i className="fa fa-facebook"/>FaceBook</a>
                    <a href="instagram">
                    <i className="fa fa-instagram"/> Instagram</a>
                    <a href="twitter">
                    <i className="fa fa-twitter"/>Twitter</a>   
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb_footer-below-links'>
              <a href='/terms'><div><p>Terms & Conditions</p></div></a>
              <a href='/privacy'><div><p>Privacy</p></div></a>
              <a href='/security'><div><p>Security</p></div></a>
              <a href='/cookies'><div><p>Cookies Declaration</p></div></a>
            </div>
        </div>
    </div>
  );
}