import BlogPage from "../../pages/BlogPage"
import { CustomCursor } from "../../components/CustomCursor"
import { BrowserView } from "react-device-detect"

export default function Blog() {
  return (
    <>
      <BrowserView>
        <CustomCursor />
      </BrowserView>
      <BlogPage />
    </>
  )
}