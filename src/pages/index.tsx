import React from "react";
import Header from "../components/Header";
import SummaryTable from "../components/SummaryTable";

import { PageWrapper, PageContent } from "./styled";
function Pages() {
  return (
    <PageWrapper>
      <PageContent>
        <Header />
        <SummaryTable />
      </PageContent>
    </PageWrapper>
  );
}

export default Pages;
