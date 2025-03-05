import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = ({id}) => {
  return (
    <div className='about' id={id}>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Welcome to my portfolio! I'm Layasaran Prabhu, a creative Software Developer with an eye for design and innovation. I have expertise in React.js, Bootstrap 5, Node.js, Express.js, MySQL, PostgreSQL, and REST APIs, developing seamless, responsive, and high-performance applications. My ability lies in turning ideas into beautiful and functional digital experiences.</p>
            <p>Having a solid background in front-end and back-end development, I enjoy creating easy-to-use user interfaces and robust server-side implementations. My process includes blending clean code, contemporary design, and a people-oriented approach to provide effective solutions.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"> <p >HTML5 & CSS3</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p >React.js</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p >Node.js</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p >Express.js</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p >Postgresql</p> <hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
