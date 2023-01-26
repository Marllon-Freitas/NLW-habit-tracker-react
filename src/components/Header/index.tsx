import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";
import { Plus, X } from "phosphor-react";

import {
  PageHeader,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "./styled";
import NewHabitForm from "../NewHabitForm";
function Header() {
  return (
    <PageHeader>
      {" "}
      <svg
        width="148"
        height="72"
        viewBox="0 0 148 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.752838"
          width="15"
          height="15"
          rx="3.5"
          fill="var(--secondary-background)"
          stroke="var(--quartenary-background)"
        />
        <rect
          x="20.5"
          y="0.752838"
          width="15"
          height="15"
          rx="3.5"
          fill="var(--primary-super-dark)"
          stroke="var(--primary-dark)"
        />
        <rect
          x="40.5"
          y="0.752838"
          width="15"
          height="15"
          rx="3.5"
          fill="var(--primary-extra-dark)"
          stroke="var(--primary-semi-dark)"
        />
        <rect
          x="60.5"
          y="0.752838"
          width="15"
          height="15"
          rx="3.5"
          fill="var(--primary-dark)"
          stroke="var(--primary)"
        />
        <rect
          x="80.5"
          y="0.752838"
          width="15"
          height="15"
          rx="3.5"
          fill="var(--primary-semi-dark)"
          stroke="var(--primary-light)"
        />
        <rect
          x="100.5"
          y="0.752838"
          width="15"
          height="15"
          rx="3.5"
          fill="var(--primary)"
          stroke="var(--primary-extra-light)"
        />
      </svg>
      <Dialog.Root>
        <Dialog.Trigger type="button">
          <Plus />
          Novo Hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <DialogClose>
              <X size={24} aria-label="fechar" />
            </DialogClose>
            <DialogTitle>Novo Hábito</DialogTitle>
            <NewHabitForm />
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </PageHeader>
  );
}

export default Header;
