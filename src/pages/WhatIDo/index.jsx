import { Card, CardHeader, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"
import { DashedCard } from "../../components/DashedCard"
import { IconArrowBarToDown } from '@tabler/icons-react'

export default function WhatIDo() {

  const start_webDevDate = new Date("2022-07-17").getFullYear();
  const start_gameDevDate = new Date("2021-10-10").getFullYear();
  const nowDate = new Date().getFullYear();

  const webDevDiff = nowDate - start_webDevDate;
  const gameDevDiff = nowDate - start_gameDevDate;

  return (
    <motion.section
      id="what-i-do"
      className='flex flex-col gap-2 min-w-[100%] min-h-[60vh] p-2 mt-48'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <Card className='rounded-[70px] w-full' shadow="sm">
        <CardHeader className='overflow-visible p-12 items-start justify-start'>
          <h3 className='font-bold text-[#A5A1FF] md:text-xl	text-xs'>What I Do</h3>
        </CardHeader>
        <CardBody className="overflow-visible p-12  items-start justify-start gap-2">
          <h1 className='font-sans md:text-6xl 	text-xl font-normal text-[#A5A1FF]'>Web development Solution Provider. Frontend and backend.
            <br />
            <br />
            Game development Solutions Provider. Arcade, Adventures, 3D, 2D, Multiplayer Services.
            <br />
            <br />
            <strong>Using techs like:</strong> JavaScript, TypeScript, React, NextUI, Visual Studio Code, Supabase, and more...
            <br />
            Also Unity 2D/3D, Unreal Engine, C#, Java and more game engines and languages.</h1>
          <br />
          <br />
          <h1 className='font-sans md:text-4xl 	text-6xs font-bold items-center text-center w-full text-[#A5A1FF]'>My skills
            <IconArrowBarToDown className="w-full mt-4 " width={64} height={64} />
          </h1>
        </CardBody>
      </Card>
      <div
        className="flex flex-col">
        <DashedCard
          leftCardHeader={"New Technologies"} leftCardText={"React, TypeScript, JS, NextUI, Framer Motion, Express and more!"} rightCardHeader={"Always working with"} rightCardText={"New Technologies"}></DashedCard>
        <DashedCard leftCardHeader={"Learn New Things"} leftCardText={"Always open to proposals for improvement and eager to learn!"} rightCardHeader={"Always looking forward to"} rightCardText={"Learn New Things"}></DashedCard>
        <DashedCard leftCardHeader={"Attention to detail"} leftCardText={"Always with great attention to detail in small and big things!"} rightCardHeader={"Always with great"} rightCardText={"Attention to detail"}></DashedCard>
        <DashedCard leftCardHeader={"Help everyone"} leftCardText={"Provide services and help to all kinds of people, companies, startups and more!"} rightCardHeader={"I focus on"} rightCardText={"Help everyone"}></DashedCard>
        <DashedCard leftCardHeader={"Years Of Experience"} leftCardText={`+${webDevDiff + (webDevDiff === 1 ? ' year' : ' years')} in Web Development and +${gameDevDiff + (gameDevDiff === 1 ? ' year' : ' years')} in Game Development`} rightCardHeader={"Growing in"} rightCardText={"Years Of Experience"}></DashedCard>
      </div>
    </motion.section >
  )
}