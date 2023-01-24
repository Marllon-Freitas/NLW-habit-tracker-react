import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const NewHabitFormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  label {
    font-weight: 500;
    line-height: 1.5rem;
  }

  &:nth-child(3) {
    margin-top: 1rem;
  }

  input {
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--quartenary-background);
    color: #fff;
    font-size: 1rem;
    margin: 0.3rem 0;
    border: none;

    &::placeholder {
      color: var(--gray);
    }
  }

  button#new-habit {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    gap: 1rem;
    font-weight: 600;
    background: var(--green);
    outline: none;
    border: none;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const CheckboxContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > button {
    border: none;
    background: none;
  }
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.7rem;

  & span {
    font-size: 1rem;
    line-height: 1.2rem;
    color: var(--text);
  }

  & > svg {
    color: var(--text);
  }

  &[data-state="checked"] {
    & > div {
      background-color: var(--green);
      border-color: var(--green);
    }
  }
`;

export const CheckboxIndicatorContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  background-color: var(--secondary-background);
  border: 2px solid var(--quartenary-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--quartenary-background);
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;
