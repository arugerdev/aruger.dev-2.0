
export const useScroll = () => {


  const scrollTo = (elementId) => {
    window.scrollTo(0, findPosition(document.getElementById(elementId)));
  }

  function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
  }

  return [scrollTo]

}