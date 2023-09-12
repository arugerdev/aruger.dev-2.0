import MainPage from "../../pages/MainPage"
import WhatIDo from "../../pages/WhatIDo"
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import Socials from "../../pages/Socials";
import { BrowserView, MobileView } from "react-device-detect";
import { ScrollerMotion } from 'scroller-motion'
import { CustomCursor } from "../../components/CustomCursor";
export default function Main() {

  return (
    <>
      <BrowserView>
        <CustomCursor />
        <ScrollerMotion spring={{ mass: 1, stiffness: 200, damping: 50 }}>
          <MainPage />
          <WhatIDo />
          <Projects />
          <About />
          <Socials />
        </ScrollerMotion>
      </BrowserView>
      <MobileView>
        <MainPage />
        <WhatIDo />
        <Projects />
        <About />
        <Socials />
      </MobileView>
    </>
  )
}