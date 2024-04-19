import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Stock monitor ",
    img: "/120323.jpg",
    desc: "Developing a real-time stock monitoring app with React offers technical advantages such as its component-based architecture for modular UI design, virtual DOM reconciliation for efficient rendering, and state management hooks like useState and useEffect for handling dynamic stock data. Integration with financial APIs and visualization libraries like Chart.js further enhances analytical capabilities. React's ecosystem enables rapid development of a responsive, scalable, and feature-rich application tailored for real-time financial data analysis.",
  },
  {
    id: 2,
    title: "Next.Js Commerce",
    img: "/alxc06hj.png",
    desc: "Next.js is the preferred choice for e-commerce apps due to its server-side rendering (SSR), which ensures fast loading times and improved SEO. Its dynamic routing simplifies navigation, while built-in API routes streamline backend integration. Compared to other technologies, Next.js offers comprehensive SSR capabilities, robust routing, and seamless backend communication, making it ideal for creating high-performance and scalable e-commerce applications. It is currently under production ",
  },
 
  {
    id: 4,
    title: "Music App",
    img: "/7747750_3730946.jpg",
    desc: "The Spotify clone replicates the popular music streaming service using React for frontend development. It integrates with the Spotify Web API for accessing music content, implements user authentication with OAuth 2.0, and provides features like audio playback, personalized recommendations, and playlist creation. The app offers a responsive interface, seamless navigation, and robust state management for an authentic Spotify-like experience.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>check out my github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
