import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";

import {
  HabitContainer,
  PopoverContent,
  CheckboxContainer,
  CheckboxIndicatorContainer,
  CheckboxRoot,
} from "./styled";
import ProgressBar from "../ProgressBar";
import { Check } from "phosphor-react";
import dayjs from "dayjs";

interface HabitDayProps {
  date: Date;
  completed?: number;
  amount?: number;
}

function HabitDay({ completed = 0, amount = 0, date }: HabitDayProps) {
  const progressPercentage = amount > 0 ? (completed / amount) * 100 : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  return (
    <Popover.Root>
      <HabitContainer progressColor={progressPercentage} />
      <Popover.Portal>
        <PopoverContent>
          <span className="week-day">
            {dayOfWeek}
          </span>
          <span className="date">
            {dayAndMonth}
          </span>
          <ProgressBar progress={progressPercentage} />

          <CheckboxContainer>
            <CheckboxRoot>
              <CheckboxIndicatorContainer>
                <Checkbox.Indicator>
                  <Check size={20} />
                </Checkbox.Indicator>
              </CheckboxIndicatorContainer>
              <span>Fazer exercícios</span>
            </CheckboxRoot>
          </CheckboxContainer>

          <Popover.Arrow height={8} width={16} />
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default HabitDay;
