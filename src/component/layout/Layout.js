import Footer from "../../bootstrap-component/Footer";
import MainNavigation from "../../bootstrap-component/MainNavigation";

import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
      <div className={classes.emptyBox}></div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
