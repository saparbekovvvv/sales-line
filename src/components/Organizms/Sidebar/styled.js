import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 256px;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  border-right: 2px solid #f1f2f4;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
`;
export const SidebarHead = styled.div``;
export const SidebarFooter = styled.div`
  margin-bottom: 20px;
`;
export const SidebarTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 19.2px;
  color: #a0aec0;
`;
export const SidebarBlock = styled.div`
  margin-top: 24px;
  padding: 0 24px;
`;
export const SidebarBack = styled.div`
  border: 2px solid #f1f2f4;
  background: #fff;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  top: 30px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 239px;
`;
