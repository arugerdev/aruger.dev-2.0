
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { motion } from "framer-motion"
import { useState } from "react"
import JSONProjects from "../../data/projects.json"
import { ProjectCard } from "../../components/ProjectCard"

export default function Projects() {
  const [projects] = useState(JSONProjects.projects)

  return (
    <motion.section
      id="projects"
      className='flex flex-col gap-2 min-w-[100%] min-h-[60vh] p-2'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
      <Card className='rounded-[70px] w-full min-h-[800px]' shadow="sm">
        <CardHeader className='overflow-visible p-12 items-start justify-start'>
          <h3 className='font-bold text-[#A5A1FF]	'>Projects</h3>
        </CardHeader>
        <CardBody className="overflow-visible p-12  items-start justify-start gap-2">
          <h1 className='font-sans text-6xl font-normal text-[#A5A1FF]'>My projects:</h1>
          <br />
          {(projects) &&
            projects.map((pro) => {
              return <ProjectCard id={pro.id} key={`pro_${pro.id}`} name={pro.name} images={pro.images} descriptions={pro.descriptions} githubURL={pro.gitHubURL} websiteURL={pro.websiteURL} />
            })
          }

        </CardBody>
      </Card>
    </motion.section>
  )
}