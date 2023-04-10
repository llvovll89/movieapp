import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mobileSizeOff, mobileSizeOn } from "../redux/mobileSlice";

const useMobileSize = () => {
    const dispatch = useDispatch();

    const mobileSize = () => {
        if (window.innerWidth <= 768) {
          dispatch(mobileSizeOn());
        } else {
          dispatch(mobileSizeOff());
        }
      };
    
      useEffect(() => {
        mobileSize();
        window.addEventListener('resize', mobileSize);
        return () => {
          window.removeEventListener('resize', mobileSize);
        };
      }, []);
}

export default useMobileSize;