import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  button {
    border: none;
    background: none;
  }
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.5s ease-in-out;

  & span {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--text);
  }

  & > svg {
    color: var(--text);
  }

  &:disabled {
    & > div {
      cursor: not-allowed;
    }
  }

  &[data-state="checked"] {
    & > span {
      text-decoration: line-through;
      color: var(--gray);
    }

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
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;
