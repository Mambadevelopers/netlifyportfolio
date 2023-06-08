import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import A1 from "../../public/images/projects/j2.jpg"
import B1 from "../../public/images/projects/j3.jpg"
import C1 from "../../public/images/projects/j4.jpg"
import D1 from "../../public/images/projects/j5.jpg"
import E1 from "../../public/images/projects/j6.jpg"
import { motion } from 'framer-motion';
import Transition from '@/components/Transition';


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github}) => {

  return(
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border 
    border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] 
      bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"/>
      <Link href={link} target='_blank' 
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}}
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} 
        target='_blank' 
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
      </Link>
      <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
      <div className='mt-2 flex items-center'>
      <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
      <Link href={link} target='_blank' 
      className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
      font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit Project</Link>
      </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark 
    dark:border-light xs:p-4'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
         whileHover={{scale:1.05}}
         transition={{duration: 0.2}}
         priority
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target='_blank' 
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
      </Link>
    
      <div className='w-full mt-2 flex items-center justify-between'>
      <Link href={link} target='_blank' 
      className='rounded-lg font-semibold underline md:text-base'>Visit</Link>
      <Link href={github} target='_blank' 
      className='w-8 md:w-6'><GithubIcon /></Link>
      </div>
      </div>

    </article>
  )
}

const projects = () => {
  return (
    <>
     <Head>
  <title>Paulscottdesigns | Project Page - Explore High-End Jewelry</title>
  <meta name="description" content="Discover a world of high-end jewelry at Paulscottdesigns. Browse our exquisite collection of fine jewelry, including engagement rings, diamond earrings, and more, showcased in our project page." />
</Head>
      <Transition />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className="pt-16">
          <AnimatedText text="Transforming Dreams into Precious Gems!" 
          className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject 
              title="High end Pure Gem Stones"
              img={project1}
              summary="Explore a range of custom wedding bands, designed to 
              celebrate the unique bond between couples. From classic styles 
              to modern interpretations, each band is crafted with precision 
              and personalized 
              details, making it a cherished symbol of everlasting love."
              github="/"
              link="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="Custom Engagement Ring"
              img={A1}
              summary="Indulge in the enchanting world of custom engagement rings, where your love story takes center stage. Each ring is meticulously crafted to reflect your unique journey, with personalized touches and exquisite details. From timeless classics to contemporary designs, these rings are a true testament to your everlasting love and commitment. Let your engagement ring be a symbol of the extraordinary bond you share, forever cherished and celebrated."
              github="/"
              link="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="Custom Gold with Diamond"
              img={B1}
              summary="Discover our exquisite collection of custom gold rings adorned with dazzling diamonds. Each ring is meticulously crafted to showcase the perfect blend of elegance and brilliance. With personalized details and meticulous attention to craftsmanship, these rings are the epitome of luxury and symbolize the unique bond between you and your loved one."
              github="/"
              link="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-12'>
            <FeaturedProject 
              title="Custom Wedding Engraved Ring"
              img={C1}
              summary="Introducing our custom wedding engraved rings, meticulously crafted to celebrate your special bond. Each ring is personalized with precision, featuring unique engravings that make it a cherished symbol of your love story. From classic elegance to modern designs, these rings capture the essence of your everlasting commitment."
              github="/"
              link="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="Pure Diamond Wedding Ring"
              img={D1}
              summary="Discover our stunning collection of pure diamond rings, meticulously crafted to symbolize everlasting love. From classic elegance to modern flair, each ring is a personalized symbol of your unique bond. With mesmerizing sparkle and timeless beauty, these rings are treasured symbols of eternal commitment."
              github="/"
              link="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="Custom Wedding Bands"
              img={E1}
              summary="Explore a range of custom wedding bands, designed to 
              celebrate the unique bond between couples. From classic styles 
              to modern interpretations, each band is crafted with precision 
              and personalized 
              details, making it a cherished symbol of everlasting love."
              github="/"
              link="/"
              type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
