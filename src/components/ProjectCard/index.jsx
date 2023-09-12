/* eslint-disable react/prop-types */
import { Button, Link } from "@nextui-org/react"
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { IconBrandGithubFilled } from "@tabler/icons-react"
import { PhotoChanger } from "../PhotoChanger"
import { getImage } from "../../hooks/getImage"

export const ProjectCard = ({ name, descriptions, images, githubURL, websiteURL }) => {
  const ref = useRef()
  const [imagesSrc, setImagesSrc] = useState([])


  useEffect(() => {
    let newImagesSrc = Array.from(images)

    for (let i = 0; i < newImagesSrc.length; i++) {
      const src = getImage(newImagesSrc[i].imagePath);

      newImagesSrc[i] = src
    }

    setImagesSrc(newImagesSrc)
  }, [images])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-20% 70%", "start start"]
  })

  const xR = useTransform(scrollYProgress, [0.75, 0], ["0%", "10%"])
  const xL = useTransform(scrollYProgress, [0.75, 0], ["0%", "-10%"])
  const opacity = useTransform(scrollYProgress, [0.75, 0], ["1", "0"])



  return (
    <motion.section
      style={{ opacity }}
      ref={ref}
      className="flex flex-row gap-4  p-4 bg-black rounded-[48px]">
      <motion.div className="w-1/2 p-5" style={{ x: xL, opacity }}
        transition={{ duration: 0.25 }}>
        <PhotoChanger images={imagesSrc} />
      </motion.div>
      <motion.div className="flex flex-col w-1/2 p-6" style={{ x: xR, opacity }}
        transition={{ duration: 0.25 }}>
        <h3 className=" font-bold text-[#A5A1FF] lg:text-4xl text-2xl">{name}</h3>
        <div className=" flex flex-col items-start pt-6">
          {descriptions.map(
            (desc, id) => {
              return <React.Fragment key={`desc_${desc.description + id}_frag`}>
                <p key={`desc_${desc.description + id}`} className="font-bold lg:text-xl text-2xs w-full max-w-sm">{desc.description}</p>
                <br />
              </React.Fragment>
            }
          )
          }
        </div>
        <footer className="flex flex-row gap-4">
          {(githubURL !== "" || githubURL) &&
            <Button
              className="bg-[#24292F] text-[white] cursor-none hoverable"
              href={githubURL}
              target="blank"
              as={Link}
              showAnchorIcon
              variant="shadow"
              anchorIcon={<IconBrandGithubFilled />}

            >
              GitHub
            </Button>
          }
          {(websiteURL !== "" || websiteURL) &&
            <Button
              className="cursor-none hoverable"
              href={websiteURL}
              target="blank"
              as={Link}
              isBlock
              color="success"
              underline='hover'
              showAnchorIcon
              variant="shadow"
            >
              WebSite
            </Button>
          }
        </footer>
      </motion.div>
    </motion.section>
  )

}