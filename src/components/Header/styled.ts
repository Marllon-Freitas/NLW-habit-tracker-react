import styled from "styled-components";

export const PageHeader = styled.header`
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 1px solid var(--primary);
    font-weight: 500;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: border-color 0.2s;
    background-color: transparent;

    &:hover {
      border-color: var(--primary-extra-light);
    }

    svg {
      color: var(--primary);
      size: 1.5rem;
    }
  }
`;