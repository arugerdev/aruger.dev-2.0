/* eslint-disable react/prop-types */

import { Card, CardHeader, CardBody, CardFooter, Chip } from "@nextui-org/react"
import useLocation from "wouter/use-location"

export const BlogItem = ({ data }) => {
  const [, pushLocation] = useLocation()
  return (
    <Card
      className="flex w-full hoverable cursor-none"
      isHoverable
      isPressable
      onPress={() => {
        pushLocation(`/blog?id=${data.id}`)
        window.location.reload()
      }
      }
    >
      <CardHeader className="flex flex-col items-start">
        {data.title}
        <div className="flex w-full h-[3px] bg-[#777] rounded-xl" />
      </CardHeader>
      <CardBody>
        <p className="text-xs text-[#888]">{data.description}</p>
      </CardBody>
      <CardFooter className="flex w-full flex-row gap-2">
        {(data.tags) &&
          data.tags.map((tag, i) => {
            return <Chip
              key={data.id + '_' + tag + i}
              size="sm"
              variant="flat"
              className="p-2 items-center text-center justify-center"
            >

              {tag}
            </Chip>
          })
        }

      </CardFooter>
    </Card >
  )
}