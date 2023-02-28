import React from "react"
import matt from "../assets/matt.png"
import nat from "../assets/nat.png"
import awhit from "../assets/awhit.png"

const AboutUs = () => {
  return (
    <>
        <div className="about-heading">
            <h2>About Us</h2>
        </div> 
        <div className="about-matt">
            <h3>Product Manager: Matthew Munoz</h3>    
            <p>Hey, I'm Matthew Munoz from San Diego, California. I'm a former high school teacher turned full-stack developer. When I'm not coding I enjoy playing video games, finding great restaurants, boxing, and spending time with my friends and family.</p>

              <img className="img-matt"src={matt} alt=" matt-image" />

        </div> 
        <div className="about-natally">    
            <h3>Project Manager: Natally Chaves Quintero</h3>
            <p>Hey, I'm Natally Chaves Quintero from Orlando, Florida. I'm passionate about coding and love turning complex problems into elegant solutions. When I'm not coding, I enjoy exploring local spots and spending time with family and friends. My goal is to use my skills to make a positive impact on the world.</p>
              
              <img className="img-nat" src={nat} alt=" nat-image" />
            
        </div>
        <div className="about-romeo">
          <h3>Tech Lead: Romeo Yutig</h3>
            <p>Hi! I’m Romeo Yutig. Transitioning into a full-stack developer as a U.S. Army veteran has been extremely fun and rewarding! I’ve learned to embrace the challenges of coding, and try to approach problem solving with eager and open eyes. I currently reside in San Diego, California and love to explore the city and enjoy the weather with my family, and pets.</p>
            <div className="romeo-img">
              {/* <img src={romeo} alt=" romeo-image" /> */}
            </div>
        </div>
        <div className="about-awhit">  
            <h3>Design Lead: A. Whitney</h3>
            <p>Hello! My name is Ms. Whitney. I'm a former elementary and Montessori teacher who has always had a passion for helping others learn and grow. While I have loved teaching, I've recently made the exciting transition to the field of web development. I'm happy to be here, combining my love of problem-solving with creativity, and I hope to be able to use these new skills to benefit society in some small way, especially in the field of education. I currently reside in the beautiful mountain west, where I enjoy hiking and travel when I have the time. I'm always on the lookout for a new adventure! When I'm not on the trails, you can usually find me solving the daily Wordle and spending quality time with family.</p>
              
              <img  className="img-awhit" src={awhit} alt=" awhit-image" />
           
        </div> 

    </>
  )
}

export default AboutUs