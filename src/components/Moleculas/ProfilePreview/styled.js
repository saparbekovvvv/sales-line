import { styled } from "styled-components";

export const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;
export const ProfileTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProfileFullName = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;
export const ProfileCompanyName = styled.h3`
  font-size: 12px;
  font-weight: 400;
`;
