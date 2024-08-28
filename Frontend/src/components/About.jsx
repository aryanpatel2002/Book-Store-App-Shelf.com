import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div>
    <Navbar/>
    <div className='dark:bg-slate-900'>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900'>
        <div className='mt-16 py-10 items-center justify-center text-center dark:bg-slate-900'>
            <h1 className='text-2xl md:text-4xl  dark:bg-slate-900'>About <span className='text-red-500'>Us</span></h1>
            <p className='mt-5'>
            <div className="about-us">
      <h1 className="mt-5 text-lg font-bold">About Shelf</h1>
      <p>
        Welcome to Shelf, your personal online library where the love for books<br/>
        meets the convenience of the digital world. At Shelf, we believe that<br/>
        every book has the power to transform, inspire, and create new worlds<br/>
        for its readers. Our mission is to make these worlds more accessible to<br/>
        everyone, no matter where they are.
      </p>

      <h2 className="mt-5 text-lg font-bold">Our Story</h2>
      <p>
        Shelf was born from a simple idea: to create a space where book lovers<br/>
        could come together, explore, and enjoy the limitless possibilities that<br/>
        literature offers. Whether you're a passionate reader, a student looking<br/>
        for resources, or someone exploring new genres, Shelf is designed with<br/>
        you in mind.
      </p>

      <h2 className="mt-5 text-lg font-bold">Our Collection</h2>
      <p>
        From timeless classics to the latest bestsellers, Shelf offers a diverse<br/>
        collection of books across all genres. We pride ourselves on curating a<br/>
        library that caters to every reader's taste. With easy-to-use search<br/>
        features, personalized recommendations, and seamless reading<br/>
        experiences, finding your next great read has never been easier.<br/>
      </p>

      <h2 className="mt-5 text-lg font-bold">Our Commitment</h2>
      <p>
        We are committed to fostering a community where reading is celebrated,<br/>
        and knowledge is shared. At Shelf, we believe in the power of books to<br/>
        educate, entertain, and enrich lives. That’s why we work tirelessly to<br/>
        ensure that our library is not just a collection of books, but a vibrant<br/>
        community of readers.
      </p>

      <h2 className="mt-5 text-lg font-bold">Join Us</h2>
      <p>
        Shelf is more than just a library; it’s a community of readers and<br/>
        thinkers. Whether you’re here to find your next favorite book, engage<br/>
        with like-minded readers, or discover something entirely new, Shelf is<br/>
        the place for you. Join us, and let’s turn the page on a new chapter<br/>
        together.
      </p>
    </div> 
            </p>
            <Link to="/">
            <button className='mt-5 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 duration-300'>
            Back
            </button>
            </Link>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default About
