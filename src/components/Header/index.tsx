import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransationButton,
} from "./styles"
import igniteSimbol from "../../assets/igniteSimbol.svg"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={igniteSimbol} alt="" />
          <h1>Dt Money</h1>
        </Logo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova Transação</NewTransationButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
