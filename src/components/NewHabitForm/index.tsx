import { Check } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { FormEvent, useState } from "react";

import {
  NewHabitFormWrapper,
  CheckboxContainer,
  CheckboxIndicatorContainer,
  CheckboxRoot,
} from "./styled";
import { api } from "../../lib/axios";

const availableWeeksDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function NewHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const createNewHabit = (event: FormEvent) => {
    event.preventDefault();

    if (!title || weekDays.length === 0) return;

    api.post("habits", {
      title,
      weekDays,
    }).then(() => {
      setTitle("");
      setWeekDays([]);
    });
  };

  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithoutWeekDay = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithoutWeekDay);
    } else {
      setWeekDays([...weekDays, weekDay]);
    }
  };
  return (
    <NewHabitFormWrapper onSubmit={createNewHabit}>
      <label htmlFor="title">Qual o nome do seu novo hábito?</label>
      <input
        type="text"
        id="title"
        placeholder="ex: Ler 1 capítulo de um livro por dia"
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <label htmlFor="category">Qual a recorrência?</label>
      <CheckboxContainer>
        {availableWeeksDays.map((weekDay, index) => (
          <CheckboxRoot
            key={weekDay}
            onCheckedChange={() => handleToggleWeekDay(index)}
            checked={weekDays.includes(index)}
          >
            <CheckboxIndicatorContainer>
              <Checkbox.Indicator>
                <Check size={20} />
              </Checkbox.Indicator>
            </CheckboxIndicatorContainer>
            <span>{weekDay}</span>
          </CheckboxRoot>
        ))}
      </CheckboxContainer>
      <button type="submit" id="new-habit">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </NewHabitFormWrapper>
  );
}

export default NewHabitForm;
