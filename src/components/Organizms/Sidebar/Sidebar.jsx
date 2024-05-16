import Logo from "../../Atoms/Logo/Logo";
import SidebarList from "../../Moleculas/SidebarList/SidebarList";
import { MAIN_LIST, OTHER_LIST, SALES_LIST } from "./const";
import BackArrow from "../../../assets/icons/BackArrow";
import {
  SidebarBack,
  SidebarBlock,
  SidebarFooter,
  SidebarHead,
  SidebarStyled,
  SidebarTitle,
} from "./styled";

function Sidebar() {
  return (
    <SidebarStyled>
      <SidebarHead>
        <SidebarBlock>
          <Logo />
          <SidebarBack>
            <BackArrow />
          </SidebarBack>
        </SidebarBlock>
        <SidebarBlock>
          <SidebarTitle>MENU</SidebarTitle>
          <SidebarList list={MAIN_LIST} />
        </SidebarBlock>
        <SidebarBlock>
          <SidebarTitle>SALES CHANNEL</SidebarTitle>
          <SidebarList list={SALES_LIST} />
        </SidebarBlock>
      </SidebarHead>
      <SidebarFooter>
        <SidebarBlock>
          {" "}
          <SidebarList list={OTHER_LIST} />
        </SidebarBlock>
      </SidebarFooter>
    </SidebarStyled>
  );
}

export default Sidebar;
