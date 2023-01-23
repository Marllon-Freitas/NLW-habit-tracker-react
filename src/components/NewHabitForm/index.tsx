import { Check } from "phosphor-react";
import React from "react";

import { NewHabitFormWrapper } from "./styled";

function NewHabitForm() {
  return (
    <NewHabitFormWrapper>
      <label htmlFor="title">Qual o nome do seu novo hábito?</label>
      <input
        type="text"
        id="title"
        placeholder="ex: Ler 1 capítulo de um livro por dia"
        autoFocus
      />
      <label htmlFor="category">Qual a recorrência?</label>
      <button type="submit">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </NewHabitFormWrapper>
  );
}

export default NewHabitForm;
