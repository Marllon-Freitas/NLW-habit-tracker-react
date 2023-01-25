import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import {
  CheckboxContainer,
  CheckboxIndicatorContainer,
  CheckboxRoot,
} from "./styled";

interface HabitListProps {
  date: Date;
  onCompletedChange: (completed: number) => void;
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>;
  completedHabits: string[];
}

function HabitList({ date, onCompletedChange }: HabitListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();
  useEffect(() => {
    api
      .get("day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => {
        setHabitsInfo(response.data);
      });
  }, []);

  const isDateAlreadyPassed = dayjs(date).endOf("day").isBefore(new Date());

  const handleToggleHabit = async (habitId: string) => {
    await api.patch(`/habits/${habitId}/toggle`);

    const isHabitAlreadyCompleted =
      habitsInfo!.completedHabits.includes(habitId);
    let completedHabits: string[] = [];

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (habit) => habit !== habitId
      );
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }
    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    });
    onCompletedChange(completedHabits.length);
  };

  return (
    <CheckboxContainer>
      {habitsInfo?.possibleHabits.map((habit) => (
        <CheckboxRoot
          key={habit.id}
          defaultChecked={habitsInfo.completedHabits.includes(habit.id)}
          disabled={isDateAlreadyPassed}
          onCheckedChange={() => {
            handleToggleHabit(habit.id);
          }}
        >
          <CheckboxIndicatorContainer>
            <Checkbox.Indicator>
              <Check size={20} />
            </Checkbox.Indicator>
          </CheckboxIndicatorContainer>
          <span>{habit.title}</span>
        </CheckboxRoot>
      ))}
    </CheckboxContainer>
  );
}

export default HabitList;
