import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import '../styles/mediaquery.css'


const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
          <h1>TechyStar.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, reiciendis, adipisci dicta doloribus ipsam quaerat, saepe itaque magni consectetur illum nisi voluptates ea maiores. Sint natus ipsam deleniti porro! Dolorem?
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quas laborum autem est expedita. Ea beatae odio temporibus veniam id mollitia veritatis? Perspiciatis, dolores quasi, sunt exercitationem architecto, eum praesentium illum voluptate cupiditate pariatur sapiente quibusdam eos earum ad iure! Sapiente earum expedita, rerum ab voluptate alias dolorem tempore asperiores cumque repudiandae eius autem, quo tenetur facere iusto praesentium dolorum perspiciatis sed delectus aut ad quis. Voluptate veniam eligendi totam atque. Odit natus qui voluptates quas voluptate! Minus, eius praesentium.</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home