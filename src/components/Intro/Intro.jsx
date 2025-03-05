import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        
        <h1 className="introText">
          I'M <span className="introName">
            <Typewriter
              words={["Layasaran Prabhu"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="introPara">Transforming ideas into digital experiences</p>
        <Link><button className="btn">View My Works</button></Link>
      </div>
    </section>
  );
}

export default Intro;
