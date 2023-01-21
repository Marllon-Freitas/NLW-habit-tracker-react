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
      return "#232323";
    }
  }};
  border: 2px solid var(--primary);
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
  background-color: #232323;

  span.week-day {
    font-weight: 500;
    color: #fff;
  }

  span.date {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  svg {
    fill: #232323;
  }
`;
