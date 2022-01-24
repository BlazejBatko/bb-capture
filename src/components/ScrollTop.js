import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(pathname);
  window.scroll(
    {
      top: 0,
      left: 0,
    },
    [pathname]
  );
  return null;
};

export default ScrollTop;
