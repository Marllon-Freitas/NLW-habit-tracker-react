import * as Popover from "@radix-ui/react-popover";

import { HabitContainer, PopoverContent } from "./styled";
import ProgressBar from "../ProgressBar";
import dayjs from "dayjs";
import HabitList from "../HabitList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);
  const progressPercentage = amount > 0 ? (completed / amount) * 100 : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  const handleCompletedChange = (completed: number) => {
    setCompleted(completed);
  };

  return (
    <Popover.Root>
      <HabitContainer progressColor={progressPercentage} />
      <Popover.Portal>
        <PopoverContent>
          <span className="week-day">{dayOfWeek}</span>
          <span className="date">{dayAndMonth}</span>
          <ProgressBar progress={progressPercentage} />

          <HabitList date={date} onCompletedChange={handleCompletedChange} />

          <Popover.Arrow height={8} width={16} />
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default HabitDay;
