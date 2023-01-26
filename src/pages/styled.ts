import styled from "styled-components";
import * as Toggle from "@radix-ui/react-toggle";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Popover from "@radix-ui/react-popover";

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

export const ToggleRoot = styled(Toggle.Root)`
  color: var(--primary);
  border: none;
  height: 35px;
  width: 35px;
  border-radius: 4px;
  display: flex;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--background);

  &[data-state="on"] {
    border: none;
    color: var(--primary);
    background-color: var(--background);
  }
`;

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;


  .RadioGroupItemWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
`;

interface RadioGroupItemProps {
  bgColor: string;
}

export const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: ${(props: RadioGroupItemProps) => props.bgColor};
  width: 25px;
  height: 25px;
  border-radius: 0.5rem;
  border: 1px solid var(--quartenary-background);
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const PopoverContent = styled(Popover.Content)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--secondary-background);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  svg {
    fill: var(--secondary-background);
  }

  &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px var(--violet7);
  }
  &[data-state="open"][data-side="top"] {
    animation-name: slideDownAndFade;
  }
  &[data-state="open"][data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  &[data-state="open"][data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  &[data-state="open"][data-side="left"] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const PopoverTrigger = styled(Popover.Trigger)`
  color: var(--primary);
  border: none;
  background: none;
  border-radius: 4px;
  display: flex;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const ColorChangesWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
