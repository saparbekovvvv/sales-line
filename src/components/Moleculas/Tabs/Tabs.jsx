import React from "react";
import { TabsContainer, TabStyled } from "./styled";

function Tabs({ list, setTab }) {
  return (
    <TabsContainer>
      {list.map((item) => (
        <TabStyled
          onClick={() => setTab(item.id)}
          key={item.id}
          active={item.isActive ? "true" : "false"}
        >
          {item.label}
        </TabStyled>
      ))}
    </TabsContainer>
  );
}

export default Tabs;
