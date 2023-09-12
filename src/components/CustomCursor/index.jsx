import { useMousePosition } from "../../hooks/useMousePosition";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const CustomCursor = () => {
  const mousePosition = useMousePosition();

  const [targetScale, setTargetScale] = useState(1)

  useEffect(() => {
    const $hoverables = document.querySelectorAll('.hoverable');

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    function onMouseHover() {
      setTargetScale(2.5)
    }

    function onMouseHoverOut() {
      setTargetScale(1)
    }

  }, [])




  return (

    <div className="customCursor">
      <motion.div
        className="cursor__ball cursor__ball--big  fixed"
        style={{ mixBlendMode: '', background: '#fff', opacity: 0.5, borderRadius: '9999px', zIndex: 1000 }}
        animate={{ x: mousePosition.x - 15, y: mousePosition.y - 15, scale: targetScale }}
        spring={{ mass: 1, stiffness: 200, damping: 50 }}
      >
        <svg height="30" width="30">
          <circle fill="#f7f8fa" cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </motion.div>

      <motion.div
        className="cursor__ball cursor__ball--small fixed"
        style={{ top: mousePosition.y - 7, left: mousePosition.x - 5, mixBlendMode: '', background: '#fff', opacity: 0.5, borderRadius: '9999px', zIndex: 1000 }}
        animate={{ scale: targetScale }}
        spring={{ mass: 1, stiffness: 200, damping: 50 }}
      >
        <svg height="10" width="10">
          <circle fill="#f7f8fa" cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </motion.div>
    </div>

  )
}