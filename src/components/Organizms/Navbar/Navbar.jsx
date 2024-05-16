import ProfilePreview from "../../Moleculas/ProfilePreview/ProfilePreview";
import { NavBarLeft, NavBarRight, NavBarStyled, NavBarTitle } from "./styled";
import MailIcon from "../../../assets/icons/MailIcon";
import BellIcon from "../../../assets/icons/BellIcon";

function Navbar({ title }) {
  return (
    <NavBarStyled>
      <NavBarLeft>
        <NavBarTitle>{title}</NavBarTitle>
      </NavBarLeft>
      <NavBarRight>
        <MailIcon />
        <BellIcon />
        <ProfilePreview />
      </NavBarRight>
    </NavBarStyled>
  );
}

export default Navbar;
