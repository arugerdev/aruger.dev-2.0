
import { Card, CardBody, CardFooter, Button, Link } from "@nextui-org/react"
import { motion } from "framer-motion"
import { IconBrandInstagram, IconBrandX, IconCup, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

export default function Socials() {

  return (
    <motion.section
      id="socials"
      className='flex flex-col gap-2 w-full items-center justify-center pb-2'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <Card className='rounded-[70px] w-fit ' shadow="sm">
        <CardBody className="flex flex-row overflow-visible p-6 pb-0  items-center justify-center gap-2">

          <Button
            isIconOnly
            className="twitter p-2  w-[48px] h-[48px] rounded-[70px] hoverable cursor-none"
            color="primary"
            aria-label="Twitter"
            as={Link}
            href="https://twitter.com/arugerdev"
            target="_blank"

          >
            <IconBrandX size={64} />
          </Button>

          <Button
            isIconOnly
            className="instagram p-2 w-[48px] h-[48px] rounded-[70px] hoverable cursor-none"
            color="primary"
            aria-label="Instagram"
            as={Link}
            href="https://www.instagram.com/aruger_dev/"
            target="_blank"

          >
            <IconBrandInstagram size={64} />
          </Button>

          <Button
            isIconOnly
            className="coffee p-2 w-[48px] h-[48px] rounded-[70px] hoverable cursor-none"
            color="primary"
            aria-label="Buy me a Coffee"
            as={Link}
            href="https://www.buymeacoffee.com/arugerdev"
            target="_blank"

          >
            <IconCup size={64} />
          </Button>

          <Button
            isIconOnly
            className="itch p-2 w-[48px] h-[48px] rounded-[70px] hoverable cursor-none"
            color="primary"
            aria-label="Itch.io"
            as={Link}
            href="https://alvaroch.itch.io/"
            target="_blank"

          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z" />
            </svg>
          </Button>

          <Button
            isIconOnly
            className="github p-2 w-[48px] h-[48px] rounded-[70px] hoverable cursor-none"
            color="primary"
            aria-label="Github"
            as={Link}
            href="https://github.com/arugerdev"
            target="_blank"

          >
            <IconBrandGithub size={64} />
          </Button>

          <Button
            isIconOnly
            className="linkedin p-2 w-[48px] h-[48px] rounded-[70px] hoverable cursor-none"
            color="primary"
            aria-label="Linkedin"
            as={Link}
            href="https://www.linkedin.com/in/aruger/"
            target="_blank"

          >
            <IconBrandLinkedin size={64} />
          </Button>

        </CardBody>
        <CardFooter className="flex flex-col w-full p-2 m-0 items-center justify-center">
          <p className="font-bold text-[grey]">© Aruger.Dev</p>
        </CardFooter>
      </Card>
    </motion.section>
  )
}