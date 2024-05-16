import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const LinkStyled = styled(NavLink)`
  display: flex;
  gap: 16px;
  align-items: center;
  color: rgb(113, 128, 150);
  text-decoration: none;
  margin-top: 16px;
  &.active {
    color: #0caf60;
  }
  &:hover {
    color: #0caf60;
    svg {
      path {
        fill: #0caf60;
      }
    }
  }
`;
