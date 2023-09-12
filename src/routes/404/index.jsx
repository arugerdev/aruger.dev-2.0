import { Card, CardHeader, CardFooter, CardBody, Image, Button, Link } from "@nextui-org/react";
import { CustomCursor } from "../../components/CustomCursor";
import Me from '../../assets/images/me_2.png'
export default function _404() {
  return (
    <>
      <CustomCursor />
      <section className="flex min-w-screen min-h-screen w-full h-full items-center justify-center">
        <Card className='rounded-[70px] w-fit h-1/2' shadow="sm">
          <CardHeader className='overflow-visible p-12 items-start justify-start'>
            <h3 className='font-bold text-[#A5A1FF] md:text-xl	text-xs'>404</h3>
          </CardHeader>
          <CardBody className="overflow-visible p-0 gap-2 ">
            <section className="relative flex flex-col w-full h-1/2 items-center justify-center ">
              <Image
                isBlurred={true}
                draggable={false}
                src={Me}
                width={300}
                height={300}></Image>
              <h1
                className='absolute font-bold text-[#A5A1FF] md:text-8xl	text-2xl'
                style={{
                  left: '50%', bottom: '-25%', transform: 'translate(-50%, -50%)', zIndex: 30
                }}
              > 404</h1>
            </section>
            <section className="flex flex-col font-bold text-[gray] text-xl w-full h-1/2 p-12 items-center justify-center text-center gap-4">
              <h1 className="text-4xl text-[white]">NOT FOUND</h1>
              <h1>Sorry, we didn&apos;t find what you were looking for 😢.</h1>
              <p className="text-base max-w-prose">You can try to return to the main page by clicking on the button below. If you think this is a bug and this should not happen, please contact the developer 👨‍💻.</p>
            </section>
          </CardBody>
          <CardFooter className="flex w-full items-center justify-center p-6">
            <Button
              className="font-bold text-base cursor-none hoverable bg-[#A5A1FF] text-[black]"
              href='/'
              as={Link}
              isBlock
              color="#A5A1FF"
              showAnchorIcon
              variant="shadow"
            >Main Page</Button>
          </CardFooter>
        </Card>
      </section >
    </>
  )
}