import React from "react";
import * as Popover from "@radix-ui/react-popover";

import { HabitContainer, PopoverContent } from "./styled";
import ProgressBar from "../ProgressBar";

interface HabitDayProps {
  amount: number;
  completed: number;
}

function HabitDay({ amount, completed }: HabitDayProps) {
  const progressPercentage = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <HabitContainer progressColor={progressPercentage} />
      <Popover.Portal>
        <PopoverContent>
          <span className="week-day">segunda</span>
          <span className="date">17/06</span>
          <ProgressBar progress={progressPercentage} />
          <Popover.Arrow height={8} width={16} />
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default HabitDay;
