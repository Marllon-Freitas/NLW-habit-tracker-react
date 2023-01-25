import React from "react";
import { DefaultTheme, DefaultColorProfile } from "styled-components";
import Header from "../components/Header";
import SummaryTable from "../components/SummaryTable";

interface PagesProps {
  handleToggleTheme: () => void;
  actualTheme: DefaultTheme;
  allColorsProfileAvailable: DefaultColorProfile[];
  setColorProfile: (colorProfile: DefaultColorProfile) => void;
}

import {
  PageWrapper,
  PageContent,
  SwitchRoot,
  SwitchThumb,
  RadioGroupItem,
  RadioGroupIndicator,
  RadioGroupRoot,
} from "./styled";


function Pages({
  handleToggleTheme,
  actualTheme,
  allColorsProfileAvailable,
  setColorProfile,
}: PagesProps) {
  return (
    <PageWrapper>
      <PageContent>
        <SwitchRoot
          onCheckedChange={() => {
            handleToggleTheme();
          }}
          checked={actualTheme.title === "light"}
        >
          <SwitchThumb />
        </SwitchRoot>
        <RadioGroupRoot
          className="RadioGroupRoot"
          defaultValue="default"
          aria-label="View density"
        >
          {allColorsProfileAvailable.map((colorProfile) => (
            <RadioGroupItem
              key={colorProfile.title}
              value={colorProfile.title}
              onClick={() => {
                setColorProfile(colorProfile);
              }}
            >
              <RadioGroupIndicator />

              <label>{colorProfile.title}</label>
            </RadioGroupItem>
          ))}
        </RadioGroupRoot>
        <Header />
        <SummaryTable />
      </PageContent>
    </PageWrapper>
  );
}

export default Pages;
