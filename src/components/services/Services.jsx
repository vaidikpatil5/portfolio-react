import { useRef } from "react";
import "./services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const yellowButton = {
initial: { 
     
  
}

}

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="public/16521.jpg" alt="" />
          <h1>
            Bring your <motion.b whileHover={{color:"orange"}}>idea</motion.b> 
          </h1>
        </div>
        <div className="title">
          <h1>
            to <motion.b whileHover={{color:"orange"}}>reality .</motion.b>
          </h1>
          <h3>
          <motion.button variants={yellowButton}>WHAT WE DO?
            </motion.button>  
          </h3>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          
          <h2>Design & Developmet </h2>
          <p>
          We craft immersive digital experiences tailored for customer-centric brands, seamlessly integrating intuitive design and robust development to elevate user engagement and drive brand loyalty across web and app platforms.
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          
          <h2>Brand Building</h2>
          <p>
          Employing data-driven strategies, we cultivate brand recognition and visibility through tailored content and cohesive messaging across digital channels, ensuring consistent brand representation and resonance with the target audience
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ads management</h2>
          <p>
          Utilizing sophisticated analytics and optimization methodologies, we orchestrate targeted online advertising campaigns to optimize return on investment (ROI) and effectively engage with the intended audience, leveraging data insights to refine and enhance campaign performance iteratively.
          </p>
          <button></button>
        </motion.div>
       
      </motion.div>
    </motion.div>
  );
};

export default Services;
