import styled from "styled-components";

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
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: var(--quartenary-background);
    color: #fff;
    font-size: 1rem;
    margin: 0.3rem 0;

    &::placeholder {
      color: var(--gray);
    }
  }

  button {
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
