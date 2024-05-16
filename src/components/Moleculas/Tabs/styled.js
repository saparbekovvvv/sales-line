import { css, styled } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eeeff2;
  gap: 16px;
`;
export const TabStyled = styled.div`
  position: relative;

  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: #718096;
  padding: 0 8px;
  ${(props) =>
    props.active === "true" &&
    css`
      color: #0caf60;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        background: #0caf60;
        bottom: -7px;
        left: 0;
      }
    `}
`;
