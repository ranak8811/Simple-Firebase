import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <h1>This is header</h1> */}
      <NavLink style={{ marginRight: "20px" }} to={"/"}>
        Home
      </NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default Header;
