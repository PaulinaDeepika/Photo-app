import React from 'react';
import './About.css';
import Footer from './Footer.js';
export default function About() {
  return (
    <>
    <div className='main py-5'>
      <div className="home-container ">
      <div className="row py-5">
        <div className='col-lo-6 py-5'>
        <p className='m-0'>TURN YOUR PHOTOS INTO ART</p>
        <h1>PHOTO GALLERY</h1>
        <div className='line my-4'></div>
        <p>Our About page is dedicated to sharing the story behind our photo gallery app. Our team is made up of passionate developers and designers who are committed to creating a user-friendly and visually stunning app that allows you to easily organize, view, and share your photos.
At our core, we believe that everyone has a unique story to tell through their photos, and we're here to help you share yours with the world. Our app is designed to make it easy for you to create stunning photo galleries that can be shared on social media, sent via email or text message, or even printed as a physical album.
We're constantly working to improve our app and add new features that will make it even more useful and enjoyable for our users. Whether you're looking for a simple way to organize your photos or a powerful tool for showcasing your work, our app has got you covered.
Thank you for choosing our photo gallery app, and we hope that you'll continue to trust us as your go-to destination for all things photography!</p>
        {/*<button className='mbtn1 mt-4'>Read More</button>
        <button className='mbtn1'>Shop Now</button>*/}
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}