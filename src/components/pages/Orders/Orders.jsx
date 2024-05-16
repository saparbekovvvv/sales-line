import React, { useState } from "react";
import { BlockContainer } from "../../../Base/styled";
import Tabs from "../../Moleculas/Tabs/Tabs";
import MainTemplate from "../../TemplatesJS/MainTemplate/MainTemplate";
import { TABS_LIST } from "./const";

function Orders() {
  const [tabsList, setTabsList] = useState(TABS_LIST);
  const setTab = (id) => {
    const data = tabsList.map((tab) => {
      // return tab.id === id ? (tab.isActive = true) : (tab.isActive = false) ;
      if (tab.id === id) {
        tab.isActive = true;
      } else tab.isActive = false;
      return tab;
    });
    setTabsList(data);
  };

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
      </BlockContainer>
    </MainTemplate>
  );
}

export default Orders;
