import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { motion, useScroll, useTransform } from "framer-motion"
import Me from '../../assets/images/me_1.png'
import { useRef, useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
export default function About() {

  const [yearsOld, updateYearsOld] = useState(0)

  useEffect(() => {
    const birthDate = new Date('21 July 2005')
    const nowDate = new Date(Date.now()).getTime()
    const diff = (nowDate - birthDate)
    const parsedDiff = Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.2425))
    updateYearsOld(parsedDiff)
  }, [])
  const ref = useRef()
  const ref2 = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-40% 70%", "start start"]
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["-10% 130%", "start start"]
  })


  const xR = useTransform(scrollYProgress, [1, 0], ["0%", "10%"])
  const xL = useTransform(scrollYProgress, [1, 0], ["0%", "-10%"])
  const opacity = useTransform(scrollYProgress, [1, 0], ["1", "0"])

  const xR2 = useTransform(scrollYProgress2, [0.7, 0], ["0%", "10%"])
  const xL2 = useTransform(scrollYProgress2, [0.7, 0], ["0%", "-10%"])
  const opacity2 = useTransform(scrollYProgress2, [0.7, 0], ["1", "0"])

  return (
    <motion.section
      id="about"
      ref={ref}
      className='flex flex-col gap-2 min-w-[100%] min-h-[60vh] p-2'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <Card className='rounded-[70px] w-full pb-12' shadow="sm">
        <CardHeader className='overflow-visible p-12 items-start justify-start'>
          <h3 className='font-bold text-[#A5A1FF] text-xl'>About</h3>
        </CardHeader>
        <CardBody className="flex overflow-visible p-12 pb-0  items-center justify-center gap-2">
          <h1 className={`font-sans text-6xl ${(isMobile ? 'text-center' : 'text-start')} font-normal text-[#A5A1FF] w-full items-center justify-center`}>About Me</h1>
          <section className="flex flex-col w-full h-full items-center justify-center">
            <section className={`flex flex-col w-full items-center justify-center`}>
              <motion.div className={`flex flex-col items-center justify-center w-full px-5 pb-5`} style={{ x: xL, opacity }}
                transition={{ duration: 0.25 }}>
                <Image isZoomed isBlurred={!isMobile} draggable={false} src={Me} width={'600px'} height={'600px'} style={{ objectFit: 'contain', placeItems: 'center', justifyItems: 'center' }} className="items-center justify-center"></Image>
              </motion.div>
              <motion.div className={`flex flex-col p-5 items-center justify-center w-full`} style={{ x: xR, opacity }}
                transition={{ duration: 0.25 }}>

                <h1 className={`mb-2 font-mono text-gray-100 ${(isMobile ? 'text-8xl' : 'text-4xl')}`}>
                  <span className="relative">
                    <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-[#A5A1FF]">
                      -{">"} Aruger Dev {"<"}-
                    </span>
                    <span
                      className="{`${styles.cursor} cursor absolute -bottom-0 left-0 -top-1 inline-block bg-[#18181b] w-full animate-type will-change`}"
                    ></span>
                  </span>
                </h1>

                <h1 className={`font-sans ${(isMobile ? 'text-4xl' : 'text-xl')} font-normal text-[gray] pb-4`}>Álvaro Ruger Chambra</h1>

                <p className={`font-sans ${(isMobile ? 'text-center  text-4xl' : 'text-center text-xl')}`}>Hi!
                  <br className="block" />
                  <br className="block" />
                  Here you will meet me, leaving my work aside a little.</p>
                <br className="block" />
                <p className={`font-sans ${(isMobile ? 'text-justify  text-4xl' : 'text-center text-xl  px-[20%]')}`}>I am a quiet boy, <strong>{yearsOld} years old</strong>, I currently live in <strong>Spain</strong>, I dedicate myself entirely to <strong>computing</strong> and <strong>technology</strong>.
                  <br className="block" />
                  <br className="block" />
                  I&apos;m a <strong>programmer</strong>, <strong>telecommunications technician</strong>, <strong>microcomputer systems and network technician</strong>.
                  <br className="block" />
                  <br className="block" />
                  Leaving technology aside, I&apos;m not only a <strong>geek</strong>, I am also a <strong>musician</strong>, an  <strong>artist</strong>, I like the <strong>field of physics</strong>, <strong>mathematics</strong>, I&apos;m a <strong>big fan of video games</strong>, and quoting a good book, I consider myself a <strong>&quot;system thinker.&quot;</strong>
                  <br className="block" />
                  <br className="block" />
                  I was born in a small town in Seville, Andalusia. Where I grew up and grew as a person, I learned a lot during my youth.
                  <br className="block" />
                  <br className="block" />
                  I am introverted, I love technical things, difficult challenges, every day I am willing to learn new things and teach my knowledge.
                  <br className="block" />
                  <br className="block" />
                  Maybe I&apos;m too talkative and write too much about myself, but I like people to know me at least a little before thinking about working with me or not.
                  <br className="block" />
                  <br className="block" />
                  I am fascinated by video games, and that is why I make them, they seem like an incredible way to express oneself creatively. My first videogame was God Of War 2, played on the ps2 where my older brother taught me to play with a console for the first time, after that I spent hours playing it over and over again, until I saw Kingdom Hearts 1, I loved its story and to this day it is still my favorite saga.
                  <br className="block" />
                  <br className="block" />
                  I studied at a conservatory for 2 years and although I did not complete the entire course and did not receive the degree, I learned a lot of interesting things, and without a doubt, I am a good pianist.
                  <br className="block" />
                  <br className="block" />
                  I have a FPB degree in Computer Science and Communications, and at the moment I am studying a GM to be a Technician in Microcomputer Systems and Networks. And in the not too distant future, I will study for the GS degree to be a Senior Technician in Web Application Development.
                  <br className="block" />
                  <br className="block" />
                  Although at the moment it seems that I have few academic titles, in reality, I am in favor of learning much more on my own, being very curious in all aspects, I love knowing how everything works and I am always learning everything that comes my way .
                </p>

              </motion.div>
            </section>

          </section>
        </CardBody>
      </Card>
    </motion.section >
  )
}