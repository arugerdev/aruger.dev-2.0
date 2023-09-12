/* eslint-disable react/prop-types */
import { Image, Card, CardBody } from '@nextui-org/react'
import Icon from '../../assets/images/Icon 1024x1024.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { IconExternalLink } from "@tabler/icons-react"
import Me from "../../assets/images/me_0.png"
import { isMobile } from 'react-device-detect'
import { Link as LinkWouter } from 'wouter'
import { useScroll as customUseScroll } from '../../hooks/useScroll'

export default function MainPage() {
  const ref = useRef();
  const [scrollTo] = customUseScroll()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"]
  })

  const opacity = useTransform(scrollYProgress, [0.2, 1.1], [1, 0.1])
  const y = useTransform(scrollYProgress, [0.2, 1.1], [0, 70])

  return (
    <>
      <nav
        ref={ref}
        className='flex min-w-full items-center justify-center h-[30vh]'

      >
        <motion.div
          style={{ opacity, y }}
          transition={{ duration: 0.25 }}>

          <Image draggable={false} src={Icon} width={(isMobile ? 256 : 128)} height={128}></Image>
        </motion.div>
      </nav >
      <motion.section className='flex flex-row gap-2 min-w-[100%] h-[60vh] h-fit p-2'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Card className='rounded-[70px] w-1/2 h-fit hover:scale-95 overflow-visible hoverable' shadow="sm" isPressable onPress={() => scrollTo("what-i-do")} isHoverable={false} isBlurred={true} isFooterBlurred={true} disableRipple={true} allowTextSelectionOnPress={true}>

          <Image isBlurred={true} draggable={false} src={Me} width={(isMobile ? '100%' : '70%')} height={(isMobile ? '100%' : '70%')} style={{ display: 'block', position: 'fixed', width: (isMobile ? '100%' : '70%'), height: (isMobile ? '100%' : '70%'), objectFit: 'contain', top: (isMobile ? '-40%' : '-20%'), left: (isMobile ? '50%' : '30%'), transform: 'translate(-50%, -50%)', zIndex: '-1' }}></Image>

          <CardBody className=" overflow-visible p-12 bg-[#413f65]  lg:items-center lg:justify-center justify-start items-start gap-2 lg:space-y-24 space-y-6 rounded-[70px]" >

            <div className='flex w-full items-center justify-start'>
              <h3 className='font-bold	'>Arugerdev</h3>
            </div>
            <div className='flex flex-row'>

              <div className='flex flex-col justify-center items-center'>

                <h1 className='font-sans xl:text-6xl lg:text-4xl md:text-3xl text-xl font-extralight	whitespace-nowrap'>I am </h1>
                <h1 className='font-mono  xl:text-7xl lg:text-5xl md:text-4xl text-2xl whitespace-nowrap'>Álvaro Ruger</h1>
                <h2 className="text-[#aaa] text-xl font-bold whitespace-nowrap">a Web Developer</h2>
              </div>
            </div>
            <div className='flex flex-row justify-start items-start w-full'>
              <h3 className='font-bold	'>What I do?</h3>
              <IconExternalLink color={"white"}></IconExternalLink>
            </div>
          </CardBody>
        </Card>
        <div className='flex flex-col w-1/2 gap-2'>
          <div className='flex flex-row w-full h-full gap-2'>
            <Card className='rounded-[70px] w-1/2 hover:scale-95 hoverable' shadow="md" isPressable onPress={() => scrollTo("projects")}
              isHoverable={true} isBlurred={!isMobile} isFooterBlurred={true} disableRipple={true} allowTextSelectionOnPress={true}>

              <CardBody className="overflow-visible md:p-12 p-2  bg-[#a5a1ff] items-start justify-center gap-2 w-full">
                <h1 className='font-sans md:text-3xl text-xl w-full text-center text-[#111]	md:text-start'>My Work</h1>
                <div className='flex flex-row w-full text-center items-center justify-center md:justify-start '>
                  <h3 className='font-bold text-[#111]'>Projects</h3>
                  <IconExternalLink color={"black"}></IconExternalLink>
                </div>
              </CardBody>

            </Card>
            <Card className='rounded-[70px] w-1/2 hover:scale-95 hoverable' shadow="sm" isPressable onPress={() => scrollTo("about")}
              isHoverable={true} isBlurred={!isMobile} isFooterBlurred={true} disableRipple={true} allowTextSelectionOnPress={true}>

              <CardBody className="overflow-visible p-12 bg-[#302f4b] items-start justify-center gap-2">
                <h1 className='font-sans md:text-3xl text-xl text-[#fff]	'>About Me</h1>
                <div className='flex flex-row'>
                  <h3 className='font-bold text-[#fff]'>About</h3>
                  <IconExternalLink color={"white"}></IconExternalLink>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className='flex w-full h-full'>
            <LinkWouter href='/blog'>
              <Card
                className='rounded-[70px] w-full hover:scale-95 hoverable'
                shadow="sm"
                isPressable={true}
                isHoverable={true}
                isBlurred={!isMobile}
                isFooterBlurred={true}
                disableRipple={true}
                allowTextSelectionOnPress={true}>
                <CardBody className="overflow-visible p-12 bg-[#9c8ee5] items-start justify-center gap-2">

                  <h1 className='font-sans  md:text-3xl text-xl text-[#111]'>My Blog</h1>
                  <div className='flex flex-row'>
                    <h3 className='font-bold text-[#111]  md:text-xl text-2xs'>Blog</h3>
                    <IconExternalLink color={"black"}></IconExternalLink>
                  </div>
                </CardBody>
              </Card>
            </LinkWouter>
          </div>
        </div>

      </motion.section >
    </>
  )
}