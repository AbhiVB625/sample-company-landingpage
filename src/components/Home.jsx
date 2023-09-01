import React from 'react';
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>HYC</h1>
          <p>Remedy to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problem you face every
            day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            consectetur, adipisci unde quo veniam cumque, voluptates saepe,
            mollitia sint in architecto officia quos harum aliquid repellat
            ullam? Earum laboriosam aut numquam eaque minus facere quisquam
            reprehenderit eum vel atque doloribus, deleniti, in placeat debitis
            exercitationem. Ab consectetur facilis aperiam earum natus deleniti
            eius quisquam? Perferendis alias amet aspernatur quod magni dolorum
            voluptatibus doloribus expedita eligendi debitis veniam architecto,
            repudiandae atque!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: '0.5s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: '0.7s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: '1s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
