import logo from "../images_and_icons/logo.png";
const SideBar = () => {
  return (
    <div>
      <div className="logo_container">
        <img src={logo} alt="logo" className="logo_nav" />
      </div>
      <section className="list_section"></section>
    </div>
  );
};

export default SideBar;
