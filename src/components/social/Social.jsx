import React from 'react'
import "./social.scss"
import { motion } from "framer-motion";

const social = () => {
  return (
    <motion.div className="social"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>

    <a href="https://github.com/vaidikpatil5">
      <img src="/github.png" alt="https://linktr.ee/vaidikpatil.vp" />
    </a>
    <a href="https://www.instagram.com/mobi__shots/">
      <img src="public/instagam.png" alt="https://linktr.ee/vaidikpatil.vp" />
    </a>
    <a href="https://mobile.twitter.com/VaidikPatil">
      <img src="/twitter.png" alt="https://linktr.ee/vaidikpatil.vp" />
    </a>
    <a href="https://www.linkedin.com/in/vaidik-patil">
      <img src="public/linkedIn.png" alt="https://linktr.ee/vaidikpatil.vp" />
    </a>
  </motion.div>
    
  )
}

export default social