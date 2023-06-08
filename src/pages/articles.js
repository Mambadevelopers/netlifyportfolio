import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article3 from "../../public/images/articles/article3.jpg";
import article4 from "../../public/images/articles/article4.jpg";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/create modal component in react using react portals.png"
import articleX from "../../public/images/articles/aricleX1.jpg"
import articleY from "../../public/images/articles/articleX3.webp"
import articleZ from "../../public/images/articles/articleX5.jpeg"
import articleX1 from "../../public/images/articles/artocleX2.png"
import Transition from '@/components/Transition';
const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null)

  function handleMouse(event){
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0);
  }



  return(
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage 
      style={{x:x, y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration: 0.2}}}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"/>
      </Link>
  )
}

const Article = ({img, title, date, link}) => {
  return(
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition: {duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light 
    text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    ">
      <MovingImg title={title} img={img} link={link}/>
      <span className="text-primary font-semibold pl-4 
      dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  )
}







const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"/>
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
  <title>Paulscottdesigns | Articles Page - Explore Jewelry Insights</title>
  <meta name="description" content="Discover insightful articles about Paulscottdesigns' exquisite jewelry designs. Explore high-end jewelry trends, tips, and inspiration to enhance your style and knowledge." />
   </Head>

      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words That Illuminate the Craft!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Unveiling the Art of Filigree: A Timeless Technique in Jewelry Design"
              summary="Discover the intricate art of filigree, an ancient technique that weaves delicate metal 
            threads into exquisite jewelry pieces. Learn about the history, process, 
            and unique characteristics of filigree, and how it adds a touch of elegance to modern designs."
              time="9 min read" 
              link="/"
              img={article4}
            />
            <FeaturedArticle
              title="Delving into Enamel Artistry: The Vibrant Fusion of Color and Craftsmanship"
              summary="Explore the captivating world of enamel artistry, a centuries-old 
              technique that combines vibrant colors with meticulous craftsmanship. 
              Uncover the history, process, and diverse styles of enamelwork, 
              from traditional cloisonné to contemporary techniques. 
              Discover how enamel adds a distinct and alluring dimension 
              to jewelry, decorative objects, and even artworks, 
            making them true masterpieces of color and creativity."
              time="23 min read"
              link="/"
              img={article3}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-primaryDark">All Articles</h2>
          <ul>
            <Article 
            title="Exquisite Elegance: Unveiling the Timeless Allure of High-End Jewelry"
            date="Mar 5, 2023"
            link="/"
            img={articleX1}
            
            />
            <Article 
            title="Beyond Beauty: The Art of Crafting Luxurious High-End Jewelry"
            date="Mar 12, 2023"
            link="/"
            img={articleZ}
            
            />
            <Article 
            title="The Epitome of Opulence: Exploring the World of High-End Jewelry"
            date="Apr 13, 2023"
            link="/"
            img={articleY}
            
            />
            <Article 
            title="Unleashing Radiance: The Captivating Charms of High-End Jewelry Creations"
            date="Apr 16, 2023"
            link="/"
            img={articleX}
            
            />
          </ul>

        </Layout>
      </main>
    </>
  );
};

export default articles;
