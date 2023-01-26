import { Check, Moon, Palette, Sun } from "phosphor-react";
import React from "react";
import { DefaultTheme, DefaultColorProfile } from "styled-components";
import * as Popover from "@radix-ui/react-popover";
import Header from "../components/Header";
import SummaryTable from "../components/SummaryTable";

interface PagesProps {
  handleToggleTheme: () => void;
  actualTheme: DefaultTheme;
  allColorsProfileAvailable: DefaultColorProfile[];
  setColorProfile: (colorProfile: DefaultColorProfile) => void;
  actualColorsProfile: DefaultColorProfile;
}

import {
  PageWrapper,
  PageContent,
  ToggleRoot,
  RadioGroupItem,
  RadioGroupIndicator,
  RadioGroupRoot,
  PopoverContent,
  ColorChangesWrapper,
  PopoverTrigger,
} from "./styled";

function Pages({
  handleToggleTheme,
  actualTheme,
  allColorsProfileAvailable,
  setColorProfile,
  actualColorsProfile,
}: PagesProps) {
  const getSelectedColorProfile = () => {
    const colorProfile = allColorsProfileAvailable.find(
      (colorProfile) => colorProfile.title === actualColorsProfile.title
    );

    return colorProfile;
  };

  return (
    <PageWrapper>
      <PageContent>
        <ColorChangesWrapper>
          <ToggleRoot
            onPressedChange={() => {
              handleToggleTheme();
            }}
          >
            {actualTheme.title === "light" ? (
              <Moon size={24} alt="Alterar tema para escuro" />
            ) : (
              <Sun size={24} alt="Alterar tema para claro" />
            )}
          </ToggleRoot>
          <Popover.Root>
            <PopoverTrigger>
              <Palette size={24} alt="Alterar o esquema de cores" />
            </PopoverTrigger>
            <Popover.Portal>
              <PopoverContent>
                <RadioGroupRoot
                  defaultValue={
                    getSelectedColorProfile()?.title || "purpleProfile"
                  }
                  aria-label="Selecione o esquema de cores"
                >
                  {allColorsProfileAvailable.map((colorProfile) => {     
                    return (
                      <div className="RadioGroupItemWrapper">
                        <RadioGroupItem
                          key={colorProfile.title}
                          value={colorProfile.title}
                          onClick={() => {
                            setColorProfile(colorProfile);
                          }}
                          bgColor={colorProfile.colors.primary500}
                        >
                          <RadioGroupIndicator>
                            {colorProfile.title === actualColorsProfile.title && (
                              <Check size={16} />
                            )}
                          </RadioGroupIndicator>
                        </RadioGroupItem>
                      </div>
                    );
                  })}
                </RadioGroupRoot>

                <Popover.Arrow height={8} width={16} />
              </PopoverContent>
            </Popover.Portal>
          </Popover.Root>
        </ColorChangesWrapper>
        <Header />
        <SummaryTable />
      </PageContent>
    </PageWrapper>
  );
}

export default Pages;
