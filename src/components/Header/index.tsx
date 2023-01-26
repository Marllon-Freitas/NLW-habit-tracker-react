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
import Logo from "../../assets/Logo";
function Header() {
  return (
    <PageHeader>
      {" "}
      <Logo />
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
