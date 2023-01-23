import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

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

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const DialogContent = styled(Dialog.Content)`
  position: absolute;
  padding: 2rem;
  background-color: var(--secondary-background);
  border-radius: 1rem;
  width: 80%;
  max-width: 24rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  background-color: transparent;
  color: var(--gray);
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
`;
