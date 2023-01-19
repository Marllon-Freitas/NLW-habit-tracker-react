import styled from "styled-components";

export const SummaryTableContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const SummaryTableWeeksDay = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-auto-flow: column;
  grid-gap: 0.75rem;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    font-weight: bold;
  }
`;

export const SummaryTableHabitsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-gap: 0.75rem;
  grid-auto-flow: column;
  align-items: center;
`;

export const SummaryTableHabitEmpty = styled.div`
    width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.5;
`;