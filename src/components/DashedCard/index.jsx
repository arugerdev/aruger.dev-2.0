/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export const DashedCard = ({ leftCardHeader, leftCardText, rightCardText, rightCardHeader }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-30% end", "start start"]
  })

  const xR = useTransform(scrollYProgress, [0.55, 0], ["100%", "50%"])
  const xL = useTransform(scrollYProgress, [0.55, 0], ["0%", "50%"])


  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden gap-2 min-h-[210px]" >

      <motion.section className="absolute w-1/2 p-4"
        style={{ x: xR }}
        transition={{ duration: 0.25 }}>

        <Card className=' rounded-[70px] w-full max-h-[250px] min-h-[200px]' shadow="sm">
          {(leftCardHeader) &&
            <CardHeader className='overflow-visible p-12 pb-1 items-center justify-center'>
              <h3 className='font-bold text-[#A5A1FF] 	'>{leftCardHeader}</h3>
            </CardHeader>
          }
          <CardBody className="overflow-visible p-12 pt-1  items-center justify-center">
            <h1 className='font-sans lg:text-4xl md:text-2xl text-xs font-normal text-[#A5A1FF]'>{leftCardText}</h1>
          </CardBody>
        </Card>
      </motion.section>
      <motion.section
        className="w-1/2 p-4"
        style={{ x: xL }}
        transition={{ duration: 0.25 }}>

        <Card className='rounded-[70px] w-full max-h-[250px] bg-[#A5A1FF] min-h-[200px]' shadow="sm">

          {(rightCardHeader) &&
            <CardHeader className='overflow-visible p-12 pb-1 items-center justify-center'>
              <h3 className='font-normal text-[black]	'>{rightCardHeader}</h3>
            </CardHeader>
          }
          <CardBody className="overflow-visible p-12 pt-1 items-center justify-center">
            <h1 className='font-mono lg:text-5xl text-3xl font-bold text-[black]'>{rightCardText}</h1>
          </CardBody>
        </Card>
      </motion.section>
    </section>
  )

}