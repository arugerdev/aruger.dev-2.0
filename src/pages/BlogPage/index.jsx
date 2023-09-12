import { Spacer, Spinner } from "@nextui-org/react"
import { Link } from "wouter"
import { SearchBar } from "../../components/SearchBar"
import { useEffect, useState } from "react"
import JSONBlogs from "../../data/blogs.json"
import { IconCaretLeft } from "@tabler/icons-react"
export default function BlogPage() {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState(JSONBlogs.blogs);
  const [searchParam, setSearch] = useState('')

  useEffect(() => {

    if (blogs !== null || blogs !== undefined || blogs)
      setLoading(false)

  }, [blogs])

  useEffect(() => {

    //Filter blogs by name or content
    setBlogs(JSONBlogs.blogs)

  }, [searchParam])

  return (
    <main className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-6">
      <form className="flex flex-row w-full p-4" action="" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <Link to="/" >
          <a
            href="/"
            className="flex items-center justify-center w-[56px] h-[56px] hoverable cursor-none pr-6" >
            <IconCaretLeft width={32} height={32} />
          </a>
        </Link>
        <SearchBar search={setSearch} />
      </form>
      <Spacer y={4} />
      <div className="w-full bg-[#222] h-[4px] rounded-full" />
      <Spacer y={4} />

      {(loading) &&
        <>
          <Spacer y={'15%'} />
          <Spinner label="Loading..." color="secondary" />
        </>
      }

      {(!loading && blogs.length > 0) &&
        //Blog Item
        <></>
      }

      {(!loading && blogs.length <= 0) &&
        <>
          <Spacer y={'15%'} />
          <h1 className="font-bold text-[#666] text-4xs">Oh... This is completly empty 😢</h1>
        </>
      }
    </main>
  )
}