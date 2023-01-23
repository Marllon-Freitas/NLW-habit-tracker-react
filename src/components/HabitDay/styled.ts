import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover";

interface ProgressBarContainerProps {
  progressColor: number;
}

export const HabitContainer = styled(Popover.Trigger)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${(props: ProgressBarContainerProps) => {
    if (props.progressColor > 0 && props.progressColor < 20) {
      return "var(--primary-super-dark)";
    } else if (props.progressColor >= 20 && props.progressColor < 40) {
      return "var(--primary-extra-dark)";
    } else if (props.progressColor >= 40 && props.progressColor < 60) {
      return "var(--primary-dark)";
    } else if (props.progressColor >= 60 && props.progressColor < 80) {
      return "var(--primary-semi-dark)";
    } else if (props.progressColor >= 80 && props.progressColor < 100) {
      return "var(--primary)";
    } else {
      return "var(--secondary-background)";
    }
  }};
  border: ${(props: ProgressBarContainerProps) => {
    if (props.progressColor > 0 && props.progressColor < 20) {
      return "2px solid var(--primary-super-dark)";
    } else if (props.progressColor >= 20 && props.progressColor < 40) {
      return "2px solid var(--primary-extra-dark)";
    } else if (props.progressColor >= 40 && props.progressColor < 60) {
      return "2px solid var(--primary-dark)";
    } else if (props.progressColor >= 60 && props.progressColor < 80) {
      return "2px solid var(--primary-semi-dark)";
    } else if (props.progressColor >= 80 && props.progressColor < 100) {
      return "2px solid var(--primary)";
    } else {
      return "2px solid var(--secondary-background)";
    }
  }};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const PopoverContent = styled(Popover.Content)`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--secondary-background);

  span.week-day {
    font-weight: 500;
    color: var(--gray);
  }

  span.date {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  svg {
    fill: var(--secondary-background);
  }
`;
