/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";


export const PhotoChanger = ({ images }) => {

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
  },);

  const slideRight = () => {
    if ((images.length > 1))

      setCurrent(current === images.length - 1 ? 0 : current + 1);
  };


  return (
    <>
      {images &&
        images.map((img, i) => {

          return < Image
            key={`img_${i}____${img}`}
            isBlurred={!isMobile}
            isZoomed
            radius='lg'
            src={img}
            className={`p-0 m-0 carousel_card ${(i == current
              ? "carousel_card-active"
              : "")} `}
            alt=""
            onMouseEnter={() => {
              setAutoPlay(false);
              clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
              setAutoPlay(true);
            }}
          />
        })
      }
    </>
  )
}