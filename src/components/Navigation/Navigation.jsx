import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to={"/"}>
          HomePage
        </NavLink>
        <NavLink className={getNavLinkClassName} to={"/movies"}>
          MoviesPage
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
