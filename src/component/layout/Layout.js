import Footer from "../../bootstrap-component/Footer";
import MainNavigation from "../../bootstrap-component/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
