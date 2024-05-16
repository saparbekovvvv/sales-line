import { LinkStyled } from "./styled";

function SidebarItem({ item }) {
  const { icon: Icon, label, to } = item;
  return (
    <LinkStyled to={to}>
      <span>{Icon && <Icon />}</span>
      <span>{label}</span>
    </LinkStyled>
  );
}

export default SidebarItem;
