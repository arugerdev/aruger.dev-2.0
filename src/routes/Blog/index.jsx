import BlogsPage from "../../pages/BlogsPage"
import { CustomCursor } from "../../components/CustomCursor"
import { BrowserView } from "react-device-detect"
import { Toaster, toast } from "sonner"
import { useEffect } from "react"
import { Button } from "@nextui-org/react"
import { isMobile } from "react-device-detect"
import BlogPage from "../../pages/BlogPage"

export default function Blog() {
  const blogId = (window.location.search.includes('?id=') ? parseInt(window.location.search.replace('?id=', '')) : '')

  useEffect(() => {
    toast(<div className="flex flex-row items-center justify-center gap-2">
      <svg className="scale-150 rounded-sm" xmlns="http://www.w3.org/2000/svg" width="15" height="10">
        <rect width="15" height="10" fill="#c60b1e" />
        <rect width="15" height="5" fill="#ffc400" y="2.5" />
      </svg>
      <p>This section is only avalible in Spanish!</p>
      <Button
        size={(isMobile ? 'md' : 'sm')}
        className={`cursor-none hoverable font-bold ${(isMobile ? 'w-1/2 h-[128px] text-3xl' : '')}`}
        target="blank"
        isBlock
        color="warning"
        underline='hover'
        showAnchorIcon
        onPress={() => toast.dismiss()}
        variant="shadow"> OK </Button>
    </div>)
  }, [])

  return (
    <>
      <Toaster className="z-0" theme="dark" position="bottom-right" toastOptions={{ duration: 15000 }} />
      <BrowserView>
        <CustomCursor />
      </BrowserView>
      {(typeof (blogId) === 'number') &&
        < BlogPage id={blogId} />
      }
      {(typeof (blogId) !== 'number') &&
        < BlogsPage />
      }
    </>
  )
}