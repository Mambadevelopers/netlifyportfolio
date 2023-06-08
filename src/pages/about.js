import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-4.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from '@/components/Transition';

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
    
  }, [springValue, value])
  

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
  <title>About Paulscottdesigns - Discover High-End Jewelry</title>
  <meta name="description" content="Learn about Paulscottdesigns and our commitment to crafting exquisite high-end jewelry. Explore our passion for exceptional craftsmanship and find the perfect pieces to celebrate your unique style and elegance." />
   </Head>

      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Transformed into Precious Art!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, Im Paul Scott, a jewelry designer with a passion for
                creating exquisite, one-of-a-kind pieces that capture the beauty
                and emotions of life. With 15 years of experience in the field, I
                am always seeking inspiration from nature, art, and personal
                stories to create timeless jewelry that holds sentimental value.
              </p>
              <p className=" my-4 font-medium">
                I believe that jewelry design goes beyond mere aesthetics – its
                about expressing individuality, celebrating milestones, and
                capturing memories in precious metals and gemstones.
              </p>
              <p className="font-medium">
                Whether Im designing engagement rings, necklaces, or other
                wearable art, I bring my commitment to craftsmanship and
                attention to detail to every piece I create. I look forward to
                the opportunity to bring my skills and passion to crafting a
                unique and meaningful jewelry piece for you.
              </p>
            </div>
            <div className="col-span-3 relative h-max 
            rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark 
            dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] 
              rounded-[2rem] bg-dark dark:bg-light "/>
              <Image src={profilePic} alt="Mambajewelry" className="w-full h-auto rounded-2xl" 
               priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={510}/>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied Clients</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={718}/>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={15}/>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
