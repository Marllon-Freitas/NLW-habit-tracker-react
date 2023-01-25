import styled from "styled-components";
import * as Switch from "@radix-ui/react-switch";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 64rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: var(--gray);
  border-radius: 9999px;
  position: relative;
  border: none;
  &[data-state="checked"] {
    background-color: var(--primary);
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  label {
    color: var(--text);
    font-size: 15px;
    line-height: 1;
    padding-left: 20px;
  }
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--primary);
  }
`;
