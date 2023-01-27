import styled from "styled-components";

export const SummaryTableContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    transform: rotate(90deg);
    margin-top: 40%;
  }

  @media (max-width: 600px) {
    margin-top: 20%;
  }

  /* media orientacion landscape */
  @media (orientation: landscape) {
    transform: unset;
    margin-top: unset;
  }
`;

export const SummaryTableWeeksDay = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-auto-flow: column;
  grid-gap: var(--grid-gap-size);
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    font-weight: bold;
    color: var(--gray);

    @media (max-width: 600px) {
      transform: rotate(-90deg);
    }

    @media (orientation: landscape) {
      transform: unset;
      margin-top: unset;
    }
  }
`;

export const SummaryTableHabitsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-gap: var(--grid-gap-size);
  grid-auto-flow: column;
  align-items: center;

  @media (max-width: 600px) {
    overflow-y: auto;
    white-space: nowrap;
    overflow-x: auto;
    position: absolute;
    left: 10%;
    top: 2%;
    padding-right: 2rem;
  }

  @media (min-width: 600px) {
    overflow-x: auto;
    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 2px;
      height: 3px;
      background-color: var(--quaternary-background);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--secondary-background);
      height: 2px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--tertiary-background);
    }
  }
`;

export const SummaryTableHabitEmpty = styled.div`
  width: var(--square-base-size);
  height: var(--square-base-size);
  border-radius: var(--square-border-radius-size);
  background-color: var(--secondary-background);
  border: 2px solid var(--quartenary-background);
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
`;
