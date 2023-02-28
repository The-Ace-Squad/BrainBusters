import React from "react"
import logoimage from "../assets/logoimage.png"

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="home-img">
        <img src={logoimage} alt=" Logo Image" />
      </div>
      <div className="home-para">
          <p> Brain Busters is the innovative solution for anyone looking to unleash their full potential and bring their ideas to life. With its easy-to-use interface, you can quickly and effortlessly store, share, and collaborate on all of your notes and thoughts. Whether you're a student, professional, or just someone with a lot of ideas, Brain Busters makes it simple to keep track of everything in one place. So why let your mind be the limit when you can bust it wide open with Brain Busters.</p> <h5>SIGN UP TODAY!! </h5>
      </div>
      </div>
    </>
  )
}

export default Home