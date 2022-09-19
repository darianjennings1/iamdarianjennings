import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Scroll2Top = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return children || null;
};
const Scroll2Middle = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return children || null;
};
export default withRouter(Scroll2Top);