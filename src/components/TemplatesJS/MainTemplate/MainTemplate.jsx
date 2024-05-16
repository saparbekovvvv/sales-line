import Navbar from "../../Organizms/Navbar/Navbar";
import Sidebar from "../../Organizms/Sidebar/Sidebar";
import { Container, MainContainer } from "./styled";

function MainTemplate({ children, title }) {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <Navbar title={title} />
        <Container>{children}</Container>
      </MainContainer>
    </>
  );
}

export default MainTemplate;
