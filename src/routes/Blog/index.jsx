import BlogPage from "../../pages/BlogPage"
import { CustomCursor } from "../../components/CustomCursor"
import { BrowserView } from "react-device-detect"
import { Toaster, toast } from "sonner"
import { useEffect } from "react"
import { Button } from "@nextui-org/react"
import { isMobile } from "react-device-detect"

export default function Blog() {

  useEffect(() => {
    toast(<div className="flex flex-row items-center justify-center gap-2">
      <svg className="scale-150 rounded-sm" xmlns="http://www.w3.org/2000/svg" width="15" height="10">
        <rect width="15" height="10" fill="#c60b1e" />
        <rect width="15" height="5" fill="#ffc400" y="2.5" />
      </svg>
      <p>This section is only avalible in Spanish!</p>
      <Button
        size={(isMobile ? 'md' : 'sm')}
        className={`font-bold cursor-none hoverable ${(isMobile ? ' w-1/2 h-[128px] text-3xl' : '')}`}
        target="blank"
        isBlock
        color="warning"
        underline='hover'
        showAnchorIcon
        onPress={() => toast.dismiss()}
        variant="shadow"> OK </Button>
    </div>
    )
  }, [])

  return (
    <>
      <Toaster className="z-0" theme="dark" position="bottom-right" toastOptions={{ duration: 15000 }} />
      <BrowserView>
        <CustomCursor />
      </BrowserView>
      <BlogPage />
    </>
  )
}