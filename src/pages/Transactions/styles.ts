import styled from "styled-components"

export const TransactionsContainer = styled.main`
  width: 90vh;
  max-width: 1120px;
  margin: 2.5rem;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    width: 85%;
    margin: 4rem auto 0;
  }

  @media (max-width: 480px) {
    margin-left: 2rem;
    width: 100vh;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighLightProps {
  variant: "income" | "outcome"
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`
