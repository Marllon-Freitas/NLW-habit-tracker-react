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
