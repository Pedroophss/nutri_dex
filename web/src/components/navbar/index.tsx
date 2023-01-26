import { NavBar, NavItem } from "./styles";

export default function() {
  return (
    <>
      <NavBar>
        <NavItem className="active" href="/">Foods</NavItem>
        <NavItem href="/Meals">Meals</NavItem>
      </NavBar>
    </>
  );
}