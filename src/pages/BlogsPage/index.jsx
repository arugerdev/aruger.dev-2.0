import { Spacer, Spinner } from "@nextui-org/react"
import { Link } from "wouter"
import { SearchBar } from "../../components/SearchBar"
import { useEffect, useState } from "react"
import JSONBlogs from "../../data/blogs.json"
import { IconCaretLeft } from "@tabler/icons-react"
import { BlogItem } from "../../components/BlogItem"

export default function BlogsPage() {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState(JSONBlogs.blogs);
  const [searchParam, setSearch] = useState('')

  useEffect(() => {

    if (blogs !== null || blogs !== undefined || blogs)
      setLoading(false)

  }, [blogs])

  useEffect(() => {

    //Filter blogs by name or content
    setBlogs(JSONBlogs.blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchParam.toLowerCase())
      || blog.description.toLowerCase().includes(searchParam.toLowerCase())
      || blog.tags.filter(e => e.toLowerCase() === searchParam.toLowerCase()).length > 0
    ))

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
        blogs.map((item) => {
          return <BlogItem key={item.id} data={item}></BlogItem>
        })
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